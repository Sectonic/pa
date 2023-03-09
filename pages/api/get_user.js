import { deleteCookie, hasCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (user) {
        const hash = getCookie('hash', {req,res,...cookieOptions});
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/user?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (request.ok) {
            res.status(200).json({ username: data.username, email: data.email, plus: data.plus });
        } else {
            deleteCookie('hash', {req,res,...cookieOptions});
            req.status(500).json({error: 'Invalid Hash'});
        }
    } else {
        res.status(409).json({error: 'No User'});
    }
}