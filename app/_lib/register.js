'use server';

import bcrypt from 'bcryptjs';
import { setSession, getSession } from './session';
import db from "@db/client";

export const createUser = async ({ email, username, password }) => {

    const checkUsername = await db.user.findUnique({ where: { username } });
    if (checkUsername) {
        return 'Username is taken';
    }

    const checkEmail = await db.user.findUnique({ where: { email } });
    if (checkEmail) {
        return 'Email is already registered';
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await db.user.create({
        data: {
            username, email,
            password: hash
        }
    });
    setSession(user.id);
    return null;

}

export const createUserEmail = async ({username, email, provider}) => {
    const session = getSession();
    if (session) {
        return {error: 'Already Logged In'};
    }

    const userExists = await db.user.findUnique({
        where: { email },
        select: {
            id: true
        }
    });

    if (userExists) {
        return {error: 'Account already exists, go to login'};
    }

    const sameUsername = await db.user.findUnique({
        where: { username },
        select: { id:true}
    });

    var user = username.replace(/\s/g, '');
    if (sameUsername) {
        var valid = false;
        while (valid) {
            user = username + Math.floor(Math.random() * 101).toString();
            const checkSameUser = await db.user.findUnique({
                where: { username },
                select: { id:true}
            });
            if (!checkSameUser) {
                valid = true;
            }
        }
    }

    const newUser = await db.user.create({
        data: { username: user, email, provider }
    });
    setSession(newUser.id);
    return {};

}