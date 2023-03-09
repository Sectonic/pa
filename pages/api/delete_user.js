import { hasCookie, getCookie, deleteCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (!user) {
        res.status(500).json({'error': 'No User'});
    } else {
        const hash = getCookie('hash', {req,res,...cookieOptions});
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/delete/user?hash=${hash}`, {credentials: 'include'});
        if (response.ok) {
            deleteCookie('hash', {req,res,...cookieOptions});
            res.status(200).json({'success': 'Successfully Deleted Account'});
        } else {
            res.status(500).json({'error': 'Could not delete user'});
        }
    }
}