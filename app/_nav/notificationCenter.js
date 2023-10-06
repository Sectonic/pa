import { createQueryString } from '@lib/params';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const NotificationCenter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const [popup, setPopup] = useState(false);

    const allUpdates = [
        { title: 'Personality Academy Released!', date: '11/1/23', dateStr: 'Nov 1 2023' }
    ]

    return (
        <div className='register-box_btn topnav_extras'>
            <img src='/img/main/notification.png' onClick={() => setPopup(!popup)} />
            {popup && (
                <OutsideClickHandler
                    onOutsideClick={() => setPopup(false)}
                >
                    <div className='user-profile notification_center-container animate__animated animate__zoomIn'>
                        <div className='notification_center'>
                            <div className='notification_title'>Notification Center</div>
                            {allUpdates.map(update => (
                                <div className='notification_box' onClick={() => router.push(pathname + '?' + createQueryString('updates', update.date, params), { scroll: false })}>
                                    <div className='notification_box-date'>{update.dateStr}</div>
                                    <div>{update.title}</div>
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