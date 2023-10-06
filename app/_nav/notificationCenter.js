"use client";

import { createQueryString } from '@lib/params';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { cookieOptions } from '@components/config';
import { getCookie, setCookie } from 'cookies-next';

const NotificationCenter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const [popup, setPopup] = useState(false);
    const [seenUpdates, setSeenUpdates] = useState([]);

    const allUpdates = [
        { title: 'Official Project Release!', date: '11/1/23', dateStr: 'Nov 1 2023' }
    ]

    useEffect(() => {
        setSeenUpdates(getCookie('updates') ? JSON.parse(getCookie('updates')) : [])
    }, [])

    const checkIfAllSeen = () => {
        const allUpdatesDates = allUpdates.map(update => update.date);
        return allUpdatesDates.every(value => seenUpdates.includes(value));
    }

    const updateClicked = (update) => {
        if (!seenUpdates.includes(update.date)) {
            setSeenUpdates(prev => [...prev, update.date]);
            setCookie('updates', JSON.stringify([...seenUpdates, update.date]), cookieOptions)
        }
        router.push(pathname + '?' + createQueryString('updates', update.date, params), { scroll: false })
    }

    return (
        <div className='register-box_btn topnav_extras'>
            <img src='/img/main/notification.png' onClick={() => setPopup(!popup)} />
            { !checkIfAllSeen() && <div className='notification_ping' onClick={() => setPopup(!popup)}></div>}
            {popup && (
                <OutsideClickHandler
                    onOutsideClick={() => setPopup(false)}
                >
                    <div className='user-profile notification_center-container animate__animated animate__zoomIn'>
                        <div className='notification_center'>
                            <div className='notification_title'>Notification Center</div>
                            {allUpdates.map(update => (
                                <div className='notification_box' onClick={() => updateClicked(update)}>
                                    <div className='notification_box-tags'>
                                        <div className='notification_box-date'>{update.dateStr}</div>
                                        { !seenUpdates.includes(update.date) && <div className='notification_box-unread'>Unread</div> }
                                    </div>
                                    <div style={{marginLeft: 5}}>{update.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </OutsideClickHandler>
            )}
        </div>  
    )
}

export default NotificationCenter;