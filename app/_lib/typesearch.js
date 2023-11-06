"use server";

import db from "./prisma/client";

export const getTypes = async (page, filters) => {
    const high = page * 50;
    const skipAmount = high - 50;
    const takeAmount = 50;

    const count = await db.type.count();
    const types = await db.type.findMany({
        ...filters,
        skip: skipAmount,
        take: takeAmount,
        select: {
            id: true,
            name: true,
            social: true,
            image: true,
            type: true,
            tag: true
        },
    })

    return {types, count};

}

export const getType = async (typeId) => {
    const type = await db.type.findUnique({
        where: {
            id: typeId
        },
        include: {
            links: true
        }
    })
    return type;
}

export const getEntries = async () => {
    const entries = await db.type.count();
    return entries;
}

export const getExamples = async (typeData) => {
    const types = await db.type.findMany({
        where: {
            ...typeData,
            tag: { not: 'Community Member' }
        },
        orderBy: {
            id: 'desc'
        },
        take: 6,
    })
    return types;
}