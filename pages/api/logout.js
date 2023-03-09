import { deleteCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
    deleteCookie('hash', {req,res,...cookieOptions});
    res.status(200).json({success: 'Successfully logged Out'});
}