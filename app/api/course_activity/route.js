import { NextResponse } from 'next/server';
import db from '@lib/prisma/client';
import { AES as crypt, enc } from "crypto-js";

const key = process.env.CRYPT_KEY;

export async function GET(request) {
    const session = request.nextUrl.searchParams.get('session');
    const course = request.nextUrl.searchParams.get('course');

    try {
        const decrypted = crypt.decrypt(session, key);
        
        if (!course) {
            return NextResponse.json([], { status: 404 })
        }
        
        const pages = await db.courseActivity.findMany({
            where: {
                user: { id: Number(decrypted.toString(enc.Utf8)) },
                url: { startsWith: '/' + course }
            }
        });
    
        return NextResponse.json(pages, { status: 200 });
    }
    catch {
        return NextResponse.json([], { status: 404 })
    }

}