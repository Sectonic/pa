"use server";

import { headers } from 'next/headers';
import Stripe from 'stripe';
import db from '@db/client';
import { getSession } from './session';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createCustomer = async (session_id) => {

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
    if (!user.customerId) {
        return;
    }

    const checkout = await stripe.checkout.sessions.retrieve(session_id);

    await db.user.update({
        where: { id: session },
        data: {
            customerId: checkout.customer,
            subscriptionId: checkout.subscription.id
        }
    });

    return 'Successfully Purchased Academy Plus';

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
        success_url: `${headers().get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${headers().get('origin')}/academyplus`,
    });
    return session.url;
}