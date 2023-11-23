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

    const { name, type, fileId, image, social, tag, sex, newLinks, connectedLinks } = typeData;

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
                create: newLinks,
                connect: connectedLinks.map(link => ({ id: link.id }))
            }
        }
    })

    return true;

}

export const updateType = async (updatedInfo) => {

    const { id, name, type, connectedLinks, notConnectedLinks, social, ...data } = updatedInfo;

    const typeData = getTypeData(type);

    const sameType = await db.typeData.findUnique({
        where: { type_social: { type: type, social: social || '' } }
    });

    const typeDataKey = sameType ? ({ 
        typeData: { connect: { id: sameType.id } }
    }) : ({
        typeData: { create: { social, ...typeData } }
    });

    await db.link.deleteMany({
        where: {
            people: {
                every: { id }
            }
        }
    });
    
    const newNotConnectedLinkIds = [];
    for (let i = 0; i < notConnectedLinks.length; i++) {
        const link = notConnectedLinks[i];
        const newNotConnectedLink = await db.link.create({
            data: link,
            select: {
                id: true
            }
        });
        newNotConnectedLinkIds.push(newNotConnectedLink.id)
    }

    const updatedData = {
        name, ...data,
        ...typeDataKey,
        links: {
            set: [
                ...connectedLinks.map(link => ({ id: link.id })), 
                ...newNotConnectedLinkIds.map(id => ({ id }))
            ],
        }
    }

    await db.type.update({
        where: { id },
        data: updatedData
    });

}

export const deleteType = async (id) => {

    await db.link.deleteMany({
        where: {
            people: {
                every: { id }
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

export const getLinksData = async (query, community) => {

    function isNumeric(str) {
        if (typeof str != "string") return false 
        return !isNaN(str) && 
               !isNaN(parseFloat(str))
    }

    const searchFilter = query ? ( isNumeric(query) ? ({ id: Number(query) }) : ({ name: { contains: query.toLowerCase() } }) ) : ({});
    const communityFilter = community ? ({
        people: {
            every: {
                tag: 'Community Member'
            }
        }
    }) : ({});

    const data = await db.link.findMany({
        take: 10,
        where: {...searchFilter, ...communityFilter},
        orderBy: {
            id: 'desc'
        },
        select: {
            id: true,
            name: true,
            url: true,
            people: {
                select: {
                    name: true,
                    typeData: {
                        select: {
                            type: true,
                            social: true
                        }
                    }
                }
            }
        }
    })

    return data;
}

export const getLinkData = async (id) => {
    return await db.link.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            name: true,
            url: true,
            channel: true,
            linkId: true,
            people: {
                select: {
                    id: true,
                    name: true,
                    tag: true,
                    typeData: {
                        select: {
                            type: true,
                            social: true
                        }
                    }
                }
            } 
        }
    })
}

export const getOnlyLink = async (id) => {
    return await db.link.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            name: true,
            url: true
        }
    })
}

export const updateLink = async (data) => {
    const { id, people, ...link } = data;
    await db.link.update({
        where: { id: Number(id) },
        data: {
            ...link,
            people: {
                set: people
            }
        }
    })
}

export const deleteLink = async (id) => {
    await db.link.delete({
        where: { id: Number(id) }
    })
}