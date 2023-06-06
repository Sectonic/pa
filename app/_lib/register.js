'use server';

import { cookieOptions } from '../_components/config';
import { cookies } from 'next/headers';

export const createUser = async (userBody) => {

    const options = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userBody)
    }

    const req= await fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, options);
    const data = await req.json();

    cookies().set({
        name: 'hash',
        value: data.hash,
        ...cookieOptions
    });

}