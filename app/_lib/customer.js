"use server";

import { cookies } from 'next/headers';

export const createCustomer = async (session_id) => {

    const hash = cookies().get('hash');
    if (!hash) {
        return;
    }

    const options = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            session_id: session_id,
            hash: hash
        })
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API}/add/subscription`, options);

    if (req.ok) {
        return 'Successfully Purchased Academy Plus'
    } else {
        return;
    }

}

export const getCustomer = async (hash) => {

    if (!hash) {
        return {
            academyPlus: false,
            customer: false,
            active: false
        }
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer?hash=${hash.value}`);
    const data = await req.json();
    if (req.ok) {
        return {
            academyPlus: data.subscription,
            customer: data.customer,
            active: true
        }
    } else {
        return {
            academyPlus: false,
            customer: false,
            active: false
        }
    }
}