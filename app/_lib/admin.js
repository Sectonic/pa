"use server";

import db from "./prisma/client";
import { getTypeData } from "./getTypeData";

const sortStringifiedList = (arr) => arr.map(Number).sort((a, b) => (a - b));

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

    const { name, type, fileId, image, social, tag, sex, newLinks, connectedLinks, verified, retyped } = typeData;

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

    const newType = await db.type.create({
        data: {
            name, image, fileId, tag, sex,
            retyped, ...typeDataKey,
            verified: tag !== 'Community Member' ? true : verified
        }
    })

    const transactionActions = [];

    if (newLinks.length > 0) {
        const createNewLinks = [];
        newLinks.forEach(link => {
            const newLink = db.link.create({
                data: {
                    ...link,
                    peopleIds: String(newType.id), 
                    people: { connect: [{ id: newType.id }] }
                }
            })
            transactionActions.push(newLink);
        })
        transactionActions.push(...createNewLinks);
    }

    if (connectedLinks.length > 0) {
        const updatePreviousLinks = [];
        connectedLinks.forEach(link => {
            updatePreviousLinks.push(db.link.update({
                where: { id: link.id },
                data: {
                    peopleIds: sortStringifiedList(`${link.peopleIds},${newType.id}`.split(',')).join(','),
                    people: {
                        connect: [{ id: newType.id }]
                    }
                }
            }))
        });
        transactionActions.push(...updatePreviousLinks)
    }

    if (transactionActions.length > 0) {
        await db.$transaction(transactionActions);
    }

    return true;

}

export const updateType = async (updatedInfo) => {

    const { id, name, type, connectedLinks, notConnectedLinks, social, disconnectIdLinks, retyped, verified, ...data } = updatedInfo;

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

    const transactionActions = [];

    if (notConnectedLinks.length > 0) {
        const createManyNotConnectedLinks = [];
        notConnectedLinks.forEach(link => {
            const notConnectedLink = db.link.create({
                data: {
                    ...link,
                    peopleIds: String(id), 
                    people: { connect: [{ id: Number(id) }] }
                }
            })
            createManyNotConnectedLinks.push(notConnectedLink);
        })
        transactionActions.push(...createManyNotConnectedLinks)
    }

    if (disconnectIdLinks.length > 0) {
        const updateDisconnectingLinks = [];
        disconnectIdLinks.forEach(link => {
            updateDisconnectingLinks.push(db.link.update({
                where: { id: link.id },
                data: {
                    peopleIds: sortStringifiedList(link.peopleIds.split(',').filter(personId => personId !== String(id))).join(','),
                    people: {
                        disconnect: [{ id: Number(id) }]
                    }
                }
            }))
        });
        transactionActions.push(...updateDisconnectingLinks);
    }

    if (connectedLinks.length > 0) {
        const updatePreviousLinks = [];
        connectedLinks.forEach(link => {
            updatePreviousLinks.push(db.link.update({
                where: { id: link.id },
                data: {
                    peopleIds: sortStringifiedList(`${link.peopleIds},${id}`.split(',')).join(','),
                    people: {
                        connect: [{ id: Number(id) }]
                    }
                }
            }))
        });
        transactionActions.push(...updatePreviousLinks);
    }

    const updatedData = {
        name, ...data,
        retyped, verified: data.tag !== 'Community Member' ? true : verified,
        ...typeDataKey,
    }

    const updatedType =  db.type.update({
        where: { id },
        data: updatedData
    });

    transactionActions.push(updatedType);

    if (transactionActions.length > 0) {
        await db.$transaction(transactionActions);
    }

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
            peopleIds: true,
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
            peopleIds: people.map(people => people.id).join(','),
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