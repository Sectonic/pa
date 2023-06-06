"use server";

import { cookies } from 'next/headers';

export const useUser = async () => {

    const hash = cookies().get('hash');
    if (!hash) {
        return;
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API}/get/user?hash=${hash.value}`, {credentials: 'include'});
    const data = await req.json();
    if (req.ok) {
        return {...data, active: true}
    } else {
        return;
    }
}

export const verifyUser = async (hash) => {
    if (!hash) {
        return false;
    }
    const verify = await fetch(`${process.env.NEXT_PUBLIC_API}/verify/${hash.value}`);
    if (verify.ok) {
        return true;
    }
    return false;
}

export const deleteUser = async () => {

    const hash = cookies().get('hash');
    if (hash) {
        await fetch(`${process.env.NEXT_PUBLIC_API}/delete/user?hash=${hash.value}`, {credentials: 'include'});
    }

}

export const editUser = async (username) => {

    const hash = cookies().get('hash');
    if (hash) {
        await fetch(`${process.env.NEXT_PUBLIC_API}/edit/user?hash=${hash.value}&username=${username}`, {credentials: 'include'});
    }
}