"use client";

import { TypeAnimation } from 'react-type-animation';
import UpdatesPopup from './updatesPopup';
import { useState } from 'react';

export default function Page() {
    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(true);
    }

    //https://discord.com/invite/s4v5yQdnE9
    //https://paypal.me/AzeOriginal?country.x=DK&locale.x=en_US

    return (
        <div className="main">
            { popup && <UpdatesPopup onClose={() => setPopup(false)} /> }
            <div className='home_banner'>
                <div className='home_banner-update' onClick={openPopup}>
                    <img src='/img/main/sparkles.png' />
                    Personality Academy Released!
                </div>
                <div className='home_banner-title'>
                    Personality Theory Made <span>Simple.</span>
                </div>
                <div className='home_banner-subtitle'>
                    Learn Personality. Type Objectively. Use The Best Tools. Actually Improve.
                </div>
                <div className='home_banner-hero-container'>
                    <img src='/img/test.png' className='home_banner-hero' />
                </div>
            </div>
      </div>
    );
}