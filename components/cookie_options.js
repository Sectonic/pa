
export const cookieOptions = {
    maxAge:31536000,
    secure:  process.env.NEXT_PUBLIC_API == "http://127.0.0.1:5000" ? false : true,
    httpOnly: true, 
}