import { hasCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    const user = hasCookie('hash', {req,res,...cookieOptions});
    if (user) {
        const hash = getCookie('hash', {req,res,...cookieOptions});
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (data.customer_id) {
            res.status(200).json({'response': 'Previous Subscriptions'});
        } else {
            res.status(404).json({'response': 'No Previous Subscription'});
        }
    } else {
        res.status(404).end();
    }
}