"use client";

import { TypeAnimation } from 'react-type-animation';
import UpdatesPopup from './updatesPopup';
import { useState } from 'react';

export default function Page() {
    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(true);
    }

    return (
        <div className="main">
            { popup && <UpdatesPopup onClose={() => setPopup(false)} /> }
            <div className="home_banner">
            <div>
                <h1 className="home_title">
                <div>
                    <h1 className="home_title_text">
                    <div className="home_title_top">Personality Academy </div>
                    <div className='home_title_bottom'>Personality Theory Made
                    <TypeAnimation
                        sequence={['Simple.', 2250, 'Doable.', 2250]}
                        repeat={Infinity}
                        style={{ marginLeft: '10px'}}
                        wrapper="span"
                        className="home_subtitle"
                        speed={10} 
                    />
                    </div>
                    </h1>
                </div>
                </h1>
                <div className="home_dashboard">
                    <div className="home_dashboard-sm" onClick={() => window.open("https://discord.com/invite/s4v5yQdnE9", '_blank').focus()}>
                        <img src="/img/main/discord.png" className="updates_img" />
                        <div className="home_lg-text">
                            <div>
                            Join Our
                            </div>
                            <div className="home_lg-textbig">
                            Community
                            </div>
                        </div>
                    </div>
                    <div className="home_dashboard-sm negml-10" onClick={() => window.open("https://paypal.me/AzeOriginal?country.x=DK&locale.x=en_US", '_blank').focus()}>
                        <img src="/img/main/support.png" className="updates_img" />
                        <div className="home_lg-text">
                            <div>
                            Support Us
                            </div>
                            <div className="home_lg-textbig">
                            Donate
                            </div>
                        </div>
                    </div>
                    <div className="home_dashboard-sm" onClick={openPopup} >
                        <img src="/img/main/launch.png" className="updates_img" />
                        <div className="home_lg-text">
                            <div>
                            June 1st
                            </div>
                            <div className="home_lg-textbig">
                            Project Launched!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='section_container'>
                <div className="section">
                    <div className="section_body">
                        <div className="section_img">
                            <img
                                src={"/img/main/logo.png"}
                            />
                        </div>
                    </div>
                    <h2 className="section_title neg-mt-45">Everything You'll Need</h2>
                    <div className="section_body section_texts-sm extra_spacing_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/main/learn2.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">Learn Personality</h3>
                                <p>
                                Unfold the objectively trackable spectrum of personality.
                                </p>
                            </div>
                        </div>
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/main/type2.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">Type Objectively</h3>
                                <p>
                                Use proper methods to track personality type objectively.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_body section_texts-sm extra_spacing_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/main/tools2.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">The Best Tools</h3>
                                <p>
                                We'll help you along the way with the best easy to use tools.
                                </p>
                            </div>
                        </div>
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/main/improve2.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">Actually Improve</h3>
                                <p>
                                Turn knowledge into action by taking theory into practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}