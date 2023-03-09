const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { hasCookie, getCookie } from 'cookies-next';
import { cookieOptions } from '../../components/cookie_options';

export default async function handler(req, res) {
  const user = hasCookie('hash', {req,res,...cookieOptions});
  if (!user) {
    res.status(500).json({'error': 'No User'});
  } else {
    if (req.method === 'POST') {
      try {
        const hash = getCookie('hash', {req,res,...cookieOptions});
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (data.customer_id) {
          const session = await stripe.billingPortal.sessions.create({
              customer: data.customer_id,
              return_url: `${req.headers.origin}`,
          });        
          res.redirect(303, session.url);
        } else {
          res.redirect(303, req.headers.origin + '/academyplus')
        }
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
}