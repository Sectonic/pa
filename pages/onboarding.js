import Banner from '../components/banner';
import "animate.css";
import {useState} from 'react';

export default function Onboarding() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    const firstTravel = () => {
        setFirst(true);
        setTimeout(() => {
            document.getElementById('first').scrollIntoView({
                behavior: 'smooth'
            });   
        }, 100)       
    }

    const secondTravel = () => {
        setSecond(true);
        setTimeout(() => {
            document.getElementById('second').scrollIntoView({
                behavior: 'smooth'
            });   
        }, 100)  
    }

    const thirdTravel = () => {
        setThird(true);
        setTimeout(() => {
            document.getElementById('third').scrollIntoView({
                behavior: 'smooth'
            });   
        }, 100)  
    }

    return (
        <div className="main">
            <Banner
            background="blue"
            title="Onboarding"
            section="logo"
            type="nav"
            />
            <div className="section">
                <h2 className="section_title">~ 1 minute</h2>
                <div className="section_body">
                    <div className="section_img section_img-mid">
                        <img
                        src={"/img/onboarding/pa.png"}
                        alt=""
                        />
                    </div>
                    <div className="section_text outline-gray">
                        <div>
                        <h2 className="margin-sm">Personality Academy</h2>
                        <div className="margin-sm"></div>
                        <p>
                            Personality Academy is a community project to pave the way forward for good use of personality theory through Ojective Personality
                        </p>
                        <p>
                            <strong>We are not affiliated with Objective Personality</strong><br/>
                            We encourage good use through the use of the system. We did not come up with it.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="section_body neg-mt-20 mobile-mt-20 section_text-cards">
                    <div className="section_text outline-gray">
                        <div className="text-sm_img extra_margin-letters">
                        <img src={"/img/onboarding/safety.png"} alt="" />
                        </div>
                        <div className="text-sm_desc">
                        <h2 className="section_subtitle margin-sm">Safety First</h2>
                        <p>
                        We keep our community safe and take care of our people <br/>
                        We have the right to kick you out if you're acting improperly
                        </p>
                        <p>
                            It isn't allowed just because it isn't in the rules
                        </p>
                        </div>
                    </div>
                    <div className="section_text outline-gray">
                        <div className="text-sm_img extra_margin-letters">
                        <img src={"/img/onboarding/important.png"} alt="" />
                        </div>
                        <div className="text-sm_desc">
                        <h2 className="section_subtitle margin-sm">Important</h2>
                        <p>
                            Respect & Common Sense <br />
                            No NSFW <br />
                            No unsolicited advertising
                        </p>
                        <p>
                            <strong>See all rules in the server & Follow Discord ToS</strong>
                        </p>
                        </div>
                    </div>
                </div>
                {!first && (
                    <div className='button_body section_body section_texts-sm neg-mt-20'>
                        <div className='multi_paragraph page_btn' onClick={firstTravel}>
                            <div className="text-sm_img page_btn-img page_btn-img-sm">
                            <img
                                src='/img/onboarding/check.png'
                            />
                            </div>
                            <div className="page_btn-text">
                            <h3 className="section_subtitle text-center">I Understand</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {first && (
                <div className="section" id='first'>
                    <div className="section_body">
                        <div className="section_text outline-gray">
                            <div>
                            <h2 className="margin-sm">Personality Academy is 16+</h2>
                            <div className="margin-sm"></div>
                            <p>
                                If you're under 16, you're not missing out. Our community's culture is adapted to work best for a certain age group, and you'd likely just feel out of place.
                            </p>
                            <p>
                                If you're under 16, you're better off joining another community, sorry!
                            </p>
                            </div>
                        </div>
                    </div>
                    {!second && (
                        <div className='button_body section_body section_texts-sm neg-mt-20'>
                            <div className='multi_paragraph page_btn' onClick={secondTravel}>
                                <div className="text-sm_img page_btn-img page_btn-img-sm">
                                <img
                                    src='/img/onboarding/check.png'
                                />
                                </div>
                                <div className="page_btn-text">
                                <h3 className="section_subtitle text-center">I am 16+</h3>
                                </div>
                            </div>
                        </div>  
                    )}
                </div>
            )}
            {second && (
                <div className="section" id='second'>
                    <div className="section_body neg-mt-20 mobile-mt-20 section_text-cards">
                        <div className="section_text outline-gray">
                            <div className="text-sm_img extra_margin-letters">
                            <img src={"/img/onboarding/typings.png"} alt="" />
                            </div>
                            <div className="text-sm_desc">
                            <h2 className="section_subtitle margin-sm">Typings</h2>
                            <p>
                            You're free to ask for typings, and anyone are free to type you But server typings are gated behind a lvl to avoid people coming here just to get typed.
                            </p>
                            <p>
                                Begging to be typed isn't allowed.
                            </p>
                            </div>
                        </div>
                        <div className="section_text outline-gray">
                            <div className="text-sm_img extra_margin-letters">
                            <img src={"/img/onboarding/constructive.png"} alt="" />
                            </div>
                            <div className="text-sm_desc">
                            <h2 className="section_subtitle margin-sm">Use typology positively</h2>
                            <div className="margin-sm">
                                <strong>{'>'}lvl 15 to apply for server typings</strong>
                            </div>
                            <p>
                                Share observations & opinions respectfully<br />
                                Respect different opinions and different systems <br />
                                Use typology for good, rather than some excuse.
                            </p>
                            </div>
                        </div>
                    </div>
                    {!third && (
                        <div className='button_body section_body section_texts-sm neg-mt-20'>
                            <div className='multi_paragraph page_btn' onClick={thirdTravel}>
                                <div className="text-sm_img page_btn-img page_btn-img-sm">
                                <img
                                    src='/img/onboarding/check.png'
                                />
                                </div>
                                <div className="page_btn-text">
                                <h3 className="section_subtitle text-center">Join Server</h3>
                                </div>
                            </div>
                        </div>  
                    )}
                </div>
            )}
            {third && (
                <div className="section" id='third'>
                    <div className="section_body">
                        <div className="section_text section-title_images-in">
                            <div className="section_title-img">
                            <img
                                src="/img/onboarding/key.png"
                                alt=""
                            />
                            </div>
                            <div className="section_title-text">
                                <h2 className="section_title-text-sm margin-sm ">Welcome to PA!</h2>
                                <p>Thank you for paying attention</p>
                            </div>
                        </div>
                    </div>
                    <div className="section_body neg-mt-20 section_texts-sm">
                        <div className="section_text outline-gray centered_text">
                            <div>
                                <h2 className="margin-sm">Here is your personal code</h2>
                                <div className='onboarding_code'>
                                    3842
                                </div>
                                <p>Copy and paste this code into <strong>#access</strong> to join</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}