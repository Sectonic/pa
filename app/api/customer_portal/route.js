import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function POST(request) {
  const hash = request.cookies.get('hash');
  if (!hash) {
    return NextResponse.json({'error': 'No User'}, {status: 500});
  } else {
    if (req.method === 'POST') {
      try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (data.customer_id) {
          const session = await stripe.billingPortal.sessions.create({
              customer: data.customer_id,
              return_url: `${req.headers.origin}`,
          });        
          return NextResponse.redirect(session.url);
        } else {
          return NextResponse.redirect(req.headers.origin + '/academyplus');
        }
      } catch (err) {
        return NextResponse.json(err.message, {status: err.statusCode || 500});
      }
    } else {
      return NextResponse.json({error: 'Method Not Allowed'}, {status: 405});
    }
  }
}