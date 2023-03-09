import { hasCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (!user) {
        res.status(500).json({'error': 'No User'});
    } else {
        const { session_id } = req.query;
        let requestOptions = {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                session_id: session_id,
                hash: getCookie('hash', {req,res,...cookieOptions})
            })
        }
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/add/subscription`, requestOptions);
        if (request.ok) {
            res.status(200).json({'response': 'Customer Account Created'});
        } else {
            res.status(404).json({'response': "Account Already Exists"});
        }
    }
}