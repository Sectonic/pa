import { getSession } from "@lib/session"
import { redirect } from "next/navigation";
import DonationPayment from "./payment";
import { getRecentDonations } from "@lib/customer";

function unixTimestampToFormattedDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
}

export default async function Page() {
    const session = getSession();

    if (!session) {
        redirect('/login?' + new URLSearchParams({  error: 'Login to an account before donating' }));
    }

    const recentDonations = await getRecentDonations();

    return (
        <div className="main">
            <div className="donate_container">
                <div>
                    <div className='home_banner-title'>
                        <span>Build</span> This Platform
                    </div>
                    <div className='home_banner-subtitle'>
                        Donate and Contribute.
                    </div>
                    <div className="donate_box">
                        <div className="donate_info">
                            <div className="donate_info-title">Why Donate?</div>
                            <div className="donate_info-desc">
                                With donating, we are able to develop and add onto parts of the website you love. All these things cost money to keep running over time; By donating you enable us to keep doing what we do. Support would mean the world to us, genuinely.
                                <br /><br />
                                <div style={{textAlign: 'right', marginRight: 20}}><i>- Personality Academy Team</i></div>
                            </div>
                            <img src="/img/home/hero.png"/>
                        </div>
                        <DonationPayment />
                    </div>
                    {recentDonations.length > 0 && <div className="recent_donations-title">Your Recent Donations</div>}
                    <div className="recent_donations">
                        {recentDonations.map((donation, i) => (
                            <div key={i}>
                                <div>${donation.amount}</div>
                                <div>{unixTimestampToFormattedDate(donation.time)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}