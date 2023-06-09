"use server";

import { cookies } from "next/headers"
import { cookieOptions } from '../_components/config';
import { AES as crypt, enc } from "crypto-js";

const key = process.env.CRYPT_KEY;

export const getSession = (name) => {
    try {
        const cookieName = typeof name === "undefined" ? "PAsession" : name; 
        const session = cookies().get(cookieName);
        const decrypted = crypt.decrypt(session.value, key);
        if (name === "PAadmin") {
            return decrypted.toString(enc.Utf8)
        } else {
            return Number(decrypted.toString(enc.Utf8));
        }
    } catch {
        return;
    }
}

export const setSession = (value, name) => {
    console.log(value);
    const encrypted = crypt.encrypt(String(value), key);
    cookies().set({
        name: typeof name === "undefined" ? "PAsession" : name,
        value: encrypted.toString(),
        ...cookieOptions
    });
}