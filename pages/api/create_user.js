import { hasCookie, setCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    const {email, username, password, confirm} = req.body;
    if (user) {
        res.status(500).json({error: 'Already Logged In'});
    } else {
        let requestOptions = {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email, username, password, confirm
            })
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, requestOptions);
        const data = await response.json();
        setCookie('hash', data.hash, {req,res,...cookieOptions});
        res.send({ ok: true });
    }
}