"use server";

import { getSession } from './session';
import db from '@db/client';

export const useUser = async () => {

    const session = getSession();
    if (!session) {
        return;
    }

    const user = await db.user.findUnique({
        where: {
            id: session
        },
        select: {
            id: true,
            username: true,
            email: true
        }
    });

    if (user) {
        return {...user, active: true}
    } else {
        return;
    }
}

export const deleteUser = async () => {

    const session = getSession();
    if (session) {
        await db.user.delete({
            where: {
                id: session
            }
        })
    }

}

export const editUser = async (username) => {

    const session = getSession();
    if (session) {
        await db.user.update({
            where: {
                id: session
            },
            data: {
                username
            }
        })
    }

}