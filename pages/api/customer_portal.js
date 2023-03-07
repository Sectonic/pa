const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  const user = session.user ? JSON.parse(session.user) : undefined;
  if (req.method === 'POST') {
    try {
      const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?user_id=${user.id}`, {credentials: 'include'});
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
      res.status(err.statusCode || 500).send(err.message);
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}