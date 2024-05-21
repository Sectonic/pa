'use client';

import { cookieOptions } from '@components/config';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';

export default function Provider({ children }) {

    useEffect(() => {

        if (!hasCookie('5-20-24-PA-Reset') && hasCookie('PAsession')) {
            deleteCookie('PAsession');
            setCookie('5-20-24-PA-Reset', 'true', cookieOptions);
            window.location.reload();
        }   

    }, [])

    return (
        <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_ID}`}>
            {children}
        </GoogleOAuthProvider>
    )
}