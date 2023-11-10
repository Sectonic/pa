"use server";

import db from "./prisma/client";
import { getTypeData } from "./getTypeData";

export const getSimilar = async (name, type) => {
    const similar = await db.type.findMany({
        where: {
            name: { startsWith: name},
            typeData: { type }
        },
        select: {
            name: true,
            image: true
        }
    })
    return similar;
}

export const addType = async (typeData) => {

    const { name, type, fileId, image, social, tag, sex, links } = typeData;

    const sameType = await db.typeData.findUnique({
        where: { type_social: { type: type, social: social || '' } }
    });

    const alreadyUploaded = await db.type.findFirst({
        where: {
            name, typeData: { type }
        }
    });

    if (alreadyUploaded) {
        return false;
    }

    const data = getTypeData(type);

    const typeDataKey = sameType ? ({ 
        typeData: { connect: { id: sameType.id } }
    }) : ({
        typeData: { create: { social, ...data } }
    });

    await db.type.create({
        data: {
            name, image, fileId, tag, sex,
            ...typeDataKey,
            links: {
                create: links
            }
        }
    })

    return true;

}

export const updateType = async ({ id, name, type, links, social, ...data }) => {

    const typeData = getTypeData(type);

    const sameType = await db.typeData.findUnique({
        where: { type_social: { type: type, social: social || '' } }
    });

    const typeDataKey = sameType ? ({ 
        typeData: { connect: { id: sameType.id } }
    }) : ({
        typeData: { create: { social, ...typeData } }
    });

    const updatedData = {
        name, ...data,
        ...typeDataKey,
        links: {
            createMany: {data: links}
        }
    }

    await db.link.deleteMany({
        where: {
            person: {
                id: id
            }
        }
    });

    await db.type.update({
        where: {id},
        data: updatedData
    });

}

export const deleteType = async (id) => {

    await db.link.deleteMany({
        where: {
            person: {
                id: id
            }
        }
    });

    await db.type.delete({
        where: {id}
    })

}

export const getViewData = async (query) => {
    

    function isNumeric(str) {
        if (typeof str != "string") return false 
        return !isNaN(str) && 
               !isNaN(parseFloat(str))
    }

    var filter;
    if (!query) {
        filter = {}
    } else {
        filter = isNumeric(query) ? { id: Number(query) } : { name: { contains: query.toLowerCase() } };
    }

    const data = await db.type.findMany({
        take: 20,
        where: filter,
        orderBy: {
            id: 'desc'
        },
        select: {
            id: true,
            image: true,
            name: true,
            typeData: {
                select: {
                    type: true,
                    social: true
                }
            }
        }
    })

    return data;
}