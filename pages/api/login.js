import { setCookie, hasCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const {email, password} = req.query;
    const cookie = hasCookie('hash', {req,res,...cookieOptions});
    if (cookie) {
        res.status(500).json({error: 'Already Logged In'});
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
    const data = await response.json();
    if (response.ok) {
        setCookie('hash', data.hash, {req,res,...cookieOptions});
        res.status(200).json({'success': 'Successfully Logged In'});
    } else {
        res.status(response.status).json({ error: data.error });
    }
}