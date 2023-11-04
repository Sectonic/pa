"use client";

import {isMobile} from 'react-device-detect';
import Link from 'next/link';
import { useEffect } from 'react';
import { url } from '@components/config';

export default function BackLink() {

    const closeTab = () => {
        window.close();
    }

    useEffect(() => {
        if (!isMobile && window.opener) {
            window.opener.postMessage('redirect', url);
        }
    }, [])
    
    if (isMobile) {
        return (
            <Link href='/'><div className='register_back'>Go Home</div></Link>
        )
    } else {
        return (
            <div className='register_back' onClick={closeTab}>Close</div>
        )
    }
}