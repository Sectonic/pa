const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(CustomerPortal, ironOptions);

async function CustomerPortal(req, res) {
  if (req.method === 'POST') {
    try {
      const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?user_id=${req.session.user.id}`, {credentials: 'include'});
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