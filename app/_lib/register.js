'use server';

import bcrypt from 'bcryptjs';
import { setSession } from './session';
import db from "@db/client";

export const createUser = async ({ email, username, password }) => {

    const hash = await bcrypt.hash(password, 10);
    const user = await db.user.create({
        data: {
            username, email,
            password: hash
        }
    });
    setSession(user.id);

}