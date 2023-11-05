
export const cookieOptions = {
    maxAge:31536000,
    sameSite: false,
    secure: process.env.NEXT_PUBLIC_API == "http:127.0.0.1:5000" ? false : true,
}

export const url = process.env.PRODUCTION === 'true' ? 'https://personality.academy' : 'http://localhost:3000'