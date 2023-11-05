"use client";

import Popup from "@components/popup";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createQueryString } from "@lib/params";
import { getCookie, setCookie } from "cookies-next";
import { cookieOptions } from "@components/config";

const UpdatesPopup = ({ date, params }) => {
    const router = useRouter();
    const pathname = usePathname();

    const onClose = () => {
        router.push(pathname + '?' + createQueryString('updates', '', params), { scroll: false });
    }

    useEffect(() => {
        const section = document.getElementById(date);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])


    return (
        <Popup onClose={onClose} >
            <h2 className="popup_title">Updates</h2>
            <div className="popup_section" id="11/5/23">
                <div className="popup_section-img">
                    <img src="/img/main/launch.png" />
                </div>
                <div className="popup_section-text">
                    <h3 className="popup_subtitle margin-sm">Official Project Release</h3>
                    <p>
                    Hi, I'm Alex, you may already know me as Aze. I'm proud to finally announce that Personality Academy has officially launched! 
                    </p>
                    <p>
                    Almost a year ago, this all started as a vision to make the best project, for the community. 
                    A place that ties OPS together with the best resources and tools, to make tracking personality type objectively, the best it can be.
                    </p>
                    <p>
                    At last, we can't wait to finally share everything we've been working on.
                    Me and Sujal have worked tirelessly on this for more than half a year.
                    </p>
                    <p>
                    And now, it's all yours.
                    </p>
                </div>
            </div>
        </Popup>
    );
}

function UpdatesPopupContainer() {
    const [showUpdates, setShowUpdates] = useState(false);
    const params = useSearchParams();

    useEffect(() => {
        if (params.get('updates')) {
            const date = new Date(params.get('updates'));
            if (!isNaN(date) && date instanceof Date) {
                const seenUpdates = getCookie('updates') ? JSON.parse(getCookie('updates')) : [];
                if (!seenUpdates.includes(params.get('updates'))) {
                    setCookie('updates', JSON.stringify([...seenUpdates, params.get('updates')]), cookieOptions);
                }
                setShowUpdates(true);
            } else {
                setShowUpdates(false);
            }
        } else {
            setShowUpdates(false);
        }
    }, [params.get('updates')]);

    if (!showUpdates) {
        return <></>
    }

    return <UpdatesPopup date={params.get('updates')}  params={params} />
  }
  
  export default UpdatesPopupContainer;