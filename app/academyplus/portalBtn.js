"use client";

import { getPortal } from "@lib/customer";
import { useRouter } from "next/navigation";

export const PortalBtn = () => {
    const router = useRouter();

    const checkoutHandler = async () => {
        const url = await getPortal();
        router.push(url);
    }

    return (
        <button type="button" className="section_text price_btn" onClick={checkoutHandler}>
            <div>Manage Subscription</div>
        </button>
    )
}