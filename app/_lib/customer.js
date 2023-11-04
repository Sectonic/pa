"use server";

import Stripe from 'stripe';
import db from '@db/client';
import { getSession } from './session';
import { url } from '@components/config';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createCustomer = async (session_id) => {

    if (!session_id) {
        return;
    }

    const session = getSession();
    if (!session) {
        return;
    }

    const user = await db.user.findUnique({
        where: { id: session },
        select: {
            customerId: true
        }
    })

    const checkout = await stripe.checkout.sessions.retrieve(session_id);
    if (!checkout) {
        return;
    }

    if (!user.customerId) {
        await db.user.update({
            where: { id: session },
            data: { 
                customerId: checkout.customer
            }
        })
    }

    return `Thank you for donating $${checkout.amount_subtotal/100}!`;

}

export const getCustomer = async () => {

    const session = getSession();
    if (!session) {
        return {
            academyPlus: false,
            customer: false,
            active: false
        }
    }

    const user = await db.user.findUnique({
        where: { id: session },
        select: {
            customerId: true,
            subscriptionId: true
        }
    });

    var subscription;
    if (user.subscriptionId) {
        subscription = stripe.subscriptions.retrieve(user.subscriptionId);
    } else {
        subscription = {status: 'not-found'};
    }

    return {
        academyPlus: subscription.status === 'active' ? true: false,
        customer: user.customerId ? true : false,
        active: true
    }
}

export const getPortal = async () => {

    const session = getSession();
    if (!session) {
        return '/academyplus';
    }

    try {
        const user = await db.user.findUnique({
            where: {
                id: session
            },
            select: {
                customerId: true
            }
        })
        if (!user.customerId) {
            return '/academyplus';
        }
        const session = await stripe.billingPortal.sessions.create({
            customer: user.customerId,
            return_url: headers().get('origin'),
        });        
        return session.url;
    } catch {
        return '/academyplus';
    }

}

export const getCheckout = async () => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            price: process.env.STRIPE_PRICE_KEY,
            quantity: 1,
        },
        ],
        mode: 'subscription',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/academyplus`,
    });
    return session.url;
}

export const getDonationalUrl = async (amount) => {
    const userSession = getSession();
    const user = await db.user.findUnique({ where: { id: userSession } })
    const existingPrice = await db.price.findUnique({
        where: { amount }
    });
    let priceId;
    if (existingPrice) {
        priceId = existingPrice.priceId;
    } else {
        const stripePrice= await stripe.prices.create({
            unit_amount: amount*100,
            currency: 'usd',
            product: process.env.STRIPE_PRODUCT_KEY,
            metadata: { 
                price: amount    
            }
        });
        await db.price.create({
            data: { amount, priceId: stripePrice.id }
        })  
        priceId = stripePrice.id;
    }
    const sessionCustomer = user.customerId ? {customer:user.customerId} : {customer_creation:'always'};
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: url,
        ...sessionCustomer
    });
    return session.url;
}

export const getRecentDonations = async () => {

    const session = getSession();
    const user = await db.user.findUnique({
        where: { id: session }
    })

    if (!user.customerId) {
        return []
    }

    const sessions = await stripe.checkout.sessions.list({
        customer: user.customerId
    });

    const recentDonations = sessions.data.map(session => ({ amount: session.amount_subtotal/100, time: session.created }));
    return recentDonations;

}