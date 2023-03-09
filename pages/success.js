import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {getCookie} from 'cookies-next';
import { cookieOptions } from '../components/cookie_options';

export default function Success() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(!router.isReady) return;
        
        let hash = getCookie('hash', cookieOptions);
        fetch(`/api/create_customer?session_id=${router.query.session_id}&hash=${hash}`).then(res => {
            if (res.ok) {
                setLoading(false);
            } else {
                router.push('/academyplus')
            }
        })
    }, [router.isReady])
    return (
        <div className="full_background">
            <div className="register_section">
                {loading ? (
                    <div class="lds-ellipsis big_loader"><div></div><div></div><div></div><div></div></div>
                ) : (
                    <>
                        <Link href='/'><div className='register_back'>Go Back</div></Link>
                        <img className="register_img" src="/img/academyplus/academyplus_exclusive.png"/>
                        <div className="register_title">Successfully Purchased Academy Plus</div>
                    </>
                )}
            </div>
        </div>
    )
}