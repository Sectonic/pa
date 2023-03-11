export const ironOptions = {
    cookieName: process.env.NEXT_PUBLIC_SESSION_NAME,
    password: process.env.NEXT_PUBLIC_SESSION_PASSWORD,
    cookieOptions: {
        httpOnly: true,
        sameSite: 'None',
        maxAge: 31536000 
    }
};