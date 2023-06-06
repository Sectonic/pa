"use server";

import { cookies } from "next/headers"

export const redirectHandler = async (referer) => {
    if (!referer && !cookies().has('TypeSearchLinked')) {
        cookies().set({
            name: 'TypeSearchLinked',
            value: 'true',
            maxAge: 5
        });
        return true;
    } else {
        return false;
    }
}