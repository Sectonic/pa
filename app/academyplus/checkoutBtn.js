"use client";

import { getCheckout } from "@lib/customer";
import { useRouter } from "next/navigation";

export const CheckoutBtn = ({ children, className }) => {
    const router = useRouter();

    const checkoutHandler = async () => {
        const url = await getCheckout();
        router.push(url);
    }

    return (
        <button type="button" className={className} onClick={checkoutHandler}>
            <div>{ children }</div>
        </button>
    )
}