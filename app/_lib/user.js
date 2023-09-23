"use server";

import { getSession } from './session';
import db from '@db/client';
import bcrypt from 'bcryptjs';

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

export const resetPassword = async (email, password) => {
    const hash = await bcrypt.hash(password, 10);
    await db.user.update({
        where: { email },
        data: { password: hash }
    });
}

export const checkEmailExists = async (email) => {
    const user = await db.user.findUnique({
        where: { email }
    });
    return user ? true : false
}