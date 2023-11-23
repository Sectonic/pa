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
        SELECT COUNT(DISTINCT shared_types) AS count
        FROM (
            SELECT
                GROUP_CONCAT(Type.id) AS shared_types
            FROM
                Link
            JOIN
                _LinkToType ON Link.id = _LinkToType.A
            JOIN
                Type ON _LinkToType.B = Type.id
            JOIN
                TypeData ON Type.TypeDataId = TypeData.id 
            WHERE
                (
                    Type.tag = 'Community Member' 
                    ${!typeEmpty ? Prisma.sql`AND ${allTypeFilters}` : Prisma.empty}
                )
                ${!nameEmpty ? Prisma.sql`AND (${allNameFilters})` : Prisma.empty}
            GROUP BY
                Link.id
        ) AS subquery;
    `;

    const groupedLinks = await db.$queryRaw`
        SELECT
            GROUP_CONCAT(link_urls SEPARATOR '/*SEPARATOR/*') AS urls,
            GROUP_CONCAT(link_names SEPARATOR '/*SEPARATOR/*') AS names,
            GROUP_CONCAT(link_channel SEPARATOR '/*SEPARATOR/*') AS channels,
            GROUP_CONCAT(link_linkId SEPARATOR '/*SEPARATOR/*') AS linkIds,
            GROUP_CONCAT(typeData_type SEPARATOR '/*SEPARATOR/*') AS types,
            GROUP_CONCAT(typeData_social SEPARATOR '/*SEPARATOR/*') AS socials
        FROM (
            SELECT
                Link.id AS link_ids,
                Link.url AS link_urls,
                Link.name AS link_names,
                Link.channel AS link_channel,
                Link.linkId AS link_linkId,
                GROUP_CONCAT(Type.id SEPARATOR '/*SEPARATOR/*') AS shared_types,
                GROUP_CONCAT(TypeData.type SEPARATOR '/*SEPARATOR/*') AS typeData_type,
                GROUP_CONCAT(TypeData.social SEPARATOR '/*SEPARATOR/*') AS typeData_social
            FROM
                Link
            JOIN
                _LinkToType ON Link.id = _LinkToType.A
            JOIN
                Type ON _LinkToType.B = Type.id
            JOIN
                TypeData ON Type.TypeDataId = TypeData.id 
            WHERE
                (
                    Type.tag = 'Community Member' 
                    ${!typeEmpty ? Prisma.sql`AND ${allTypeFilters}` : Prisma.empty}
                )
                ${!nameEmpty ? Prisma.sql`AND (${allNameFilters})` : Prisma.empty}
            GROUP BY
                Link.id
        ) AS subquery
        GROUP BY
            shared_types
        ORDER BY
            shared_types DESC
        LIMIT ${takeAmount}
        OFFSET ${skipAmount};
    `;

    return { types: groupedLinks, count: Number(countQuery[0].count) || 0 }
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
            url: true
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