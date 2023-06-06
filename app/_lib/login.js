'use server';

import { cookieOptions } from '../_components/config';
import { cookies } from 'next/headers';

export const useLogin = async (email, password) => {
    
    const hash = cookies().get('hash');
    if (hash) {
        return {error: 'Already Logged In'};
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
    const data = await req.json();
    
    if (req.ok) {

        cookies().set({
            name: 'hash',
            value: data.hash,
            ...cookieOptions
        });

        return {status: 200};
    } else {
        return {error: data.error};
    }
}