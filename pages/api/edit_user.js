import { hasCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (!user) {
        res.status(500).json({'error': 'No User'});
    } else {
        const hash = getCookie('hash', {req,res,...cookieOptions});
        const {username} = req.query;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/edit/user?hash=${hash}&username=${username}`, {credentials: 'include'});
        if (response.ok) {
            res.status(200).json({'success': 'Successfully Edited Account'});
        } else {
            res.status(500).json({'error': 'Could not edit user'});
        }
    }
}