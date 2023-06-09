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
        }
    })
    if (!emailExists) {
        return {error: 'Account does not exist'}
    }

    const samePassword = await bcrypt.compare(password, emailExists.password);
    if (samePassword) {
        setSession(emailExists.id);
    } else {
        return {error: 'Password does not match email'};
    }
}