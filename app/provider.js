'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Provider({ children }) {
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID}>
            {children}
        </GoogleOAuthProvider>
    )
}