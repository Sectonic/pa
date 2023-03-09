import { hasCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const {email, username, password, confirm} = req.body;
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (user) {
        res.status(500).json({error: 'Already Logged In'});
    }
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email, username, password, confirm
        })
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/verify/user`, requestOptions);
    const data = await response.json();
    if (response.ok) {
        res.status(200).json({'success': 'Information Valid'});
    } else {
        res.status(response.status).json({ error: data.error });
    }
}