'use server';

import { getSession, setSession } from './session';
import db from "@db/client";
import bcrypt from 'bcryptjs';

export const useLogin = async (email, password) => {
    
    const session = getSession();
    if (session) {
        return {error: 'Already Logged In'};
    }

    const emailExists = await db.user.findUnique({
        where: {
            email
        },
        select: {
            password: true,
            id: true,
            provider: true
        }
    })
    
    if (!emailExists) {
        return {error: 'Account does not exist, go to register'};
    } else if (emailExists.provider) {
        return {error: 'Use the provider ' + emailExists.provider + ' to login'};
    }

    const samePassword = await bcrypt.compare(password, emailExists.password);
    if (samePassword) {
        setSession(emailExists.id);
    } else {
        return {error: 'Password does not match email'};
    }
}

export const loginUserEmail = async email => {
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
        setSession(userExists.id);
        return {userExists: true};
    } else {
        return {error: 'Account does not exist'};
    }
}