"use server";

import { Prisma } from "@prisma/client";
import db from "./prisma/client";

export const getTypes = async (page, filters) => {
    const high = page * 50;
    const skipAmount = high - 50;
    const takeAmount = 50;

    const count = await db.type.count({ ...filters });
    const types = await db.type.findMany({
        ...filters,
        skip: skipAmount,
        take: takeAmount,
        select: {
            id: true,
            name: true,
            image: true,
            tag: true,
            typeData: {
                select: {
                    type: true,
                    social: true
                }
            }
        },
    })

    return {types, count};

}

export const getCommunityTypes = async (page, filters) => {

    const high = page * 50;
    const skipAmount = high - 50;
    const takeAmount = 50;

    const typeEmpty = Object.entries(filters.typeData).length === 0;
    const allTypeFilters = Object.entries(filters.typeData).length > 0 ? 
        Prisma.join(
            Object.entries(filters.typeData).map(([key, value]) => value.length > 1 ? 
                Prisma.sql`TypeData.${Prisma.raw(key)} IN (${Prisma.join(value)})`
                : Prisma.sql`TypeData.${Prisma.raw(key)} = ${value[0]}`
            ), " AND ") 
        : Prisma.empty;

    const nameEmpty = !filters.name || filters.name.length === 0;
    const allNameFilters = nameEmpty ? Prisma.empty :
        Prisma.join(
            filters.name.map(name => Prisma.sql`Link.name LIKE ${Prisma.raw(`'%${name}%'`)}`),
            " OR "
        )

    const countQuery = await db.$queryRaw`
        SELECT
            COUNT(DISTINCT Link.concatPeople) AS totalGroups
        FROM
            Link
        JOIN
            Type ON FIND_IN_SET(Type.id, Link.concatPeople) > 0
        JOIN
            TypeData ON TypeData.id = Type.typeDataId
        WHERE
            (
                Type.tag = 'Community Member' 
                ${!typeEmpty ? Prisma.sql`AND ${allTypeFilters}` : Prisma.empty}
            )
            ${!nameEmpty ? Prisma.sql`AND (${allNameFilters})` : Prisma.empty};
    `;

    const groupedLinks = await db.$queryRaw`
        SELECT
            GROUP_CONCAT(Link.name SEPARATOR '/*SEPARATOR/*') AS names,
            GROUP_CONCAT(Link.url SEPARATOR '/*SEPARATOR/*') AS urls,
            GROUP_CONCAT(Link.channel SEPARATOR '/*SEPARATOR/*') AS channels,
            GROUP_CONCAT(Link.linkId SEPARATOR '/*SEPARATOR/*') AS linkIds,
            GROUP_CONCAT(TypeData.type SEPARATOR '/*SEPARATOR/*') AS types,
            GROUP_CONCAT(TypeData.social SEPARATOR '/*SEPARATOR/*') AS socials
        FROM
            Link
        JOIN
            Type ON FIND_IN_SET(Type.id, Link.concatPeople) > 0
        JOIN
            TypeData ON TypeData.id = Type.typeDataId
        WHERE
            (
                Type.tag = 'Community Member' 
                ${!typeEmpty ? Prisma.sql`AND ${allTypeFilters}` : Prisma.empty}
            )
            ${!nameEmpty ? Prisma.sql`AND (${allNameFilters})` : Prisma.empty}
        GROUP BY
            Link.concatPeople
        ORDER BY
            Link.concatPeople DESC
        LIMIT ${takeAmount}
        OFFSET ${skipAmount};
    `

    return { types: groupedLinks, count: Number(countQuery[0].totalGroups) || 0 }
}

export const getSelectedLinks = async (value) => {
    return await db.link.findMany({
        where: {
            name: {
                contains: value
            },
            people: {
                every: {
                    tag: 'Community Member'
                }
            }
        },
        select: {
            name: true,
            id: true,
            url: true,
            peopleIds: true
        },
        take: 10
    })
}

export const getSelectedPeople = async (value) => {
    return await db.type.findMany({
        where: {
            OR: [
                { name: { contains: value } },
                { typeData: { type: { contains: value } } },
            ]
        },
        select: {
            id: true,
            name: true,
            typeData: {
                select: {
                    type: true,
                    social: true
                }
            }
        },
        take: 10
    })
}

export const getType = async (typeId) => {
    const type = await db.type.findUnique({
        where: {
            id: typeId
        },
        include: {
            links: {
                include: {
                    _count: true
                }
            },
            typeData: true
        }
    })
    return type;
}

export const getExamples = async (typeData) => {
    const types = await db.type.findMany({
        where: {
            typeData,
            tag: { not: 'Community Member' }
        },
        include: {
            typeData: {
                select: {
                   social: true,
                   type: true 
                }
            }
        },
        orderBy: {
            id: 'desc'
        },
        take: 6,
    })
    return types;
}