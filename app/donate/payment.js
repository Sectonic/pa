"use client";

import { getDonationalUrl } from "@lib/customer";
import {isMobile} from 'react-device-detect';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { url } from "@components/config";

export default function DonationPayment() {
    const [donation, setDonation] = useState();
    const [error, setError] = useState('');
    const router = useRouter();

    const handleDonate = async () => {
        setError('');
        if (donation >= 1) {
            const donationUrl = await getDonationalUrl(donation);

            if (isMobile) {
                router.push(donationUrl);
            } else {
                const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
                const dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    
                const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    
                const left = ((width / 2) - 250) + dualScreenLeft;
                const top = ((height / 2) - 250) + dualScreenTop;
                const popup = window.open(donationUrl, "Personality Academy Donation", `height=500,width=500,top=${top},left=${left}`);
                popup?.postMessage("message", url);
            }
        } else {
            setError('The donation minimum is $1');
        }
    }

    useEffect(() => {
        const redirectOnSuccess = (e) => {
            if (e?.data === 'redirect') {
                router.refresh();
            }
        };
        window.addEventListener('message', redirectOnSuccess);
        return () => window.removeEventListener('message', redirectOnSuccess);
    }, []);

    return (
        <div className="donate_payment">
            <div className="donate_payment-btns">
                {[10, 20, 25, 50, 75, 100].map((num, i) => (
                    <div key={i} className={num === donation ? 'active' : ''} onClick={() => setDonation(num)}>${num}</div>
                ))}
            </div>
            <label>Amount</label>
            <div className="donate_payment-input">
                <div>$</div>
                <input type="number" min={0} step={1} value={donation} onChange={(e) => setDonation(e.target.value)} />
            </div>
            {error !== '' && <div className='register_error'>{error}</div>}
            <div className="donate_payment-submit" onClick={handleDonate}>Donate</div>
        </div>
    )
}