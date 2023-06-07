import Banner from '@components/banner';
import "animate.css";
import { createMetaData } from "@lib/metadata";
import { OnboardingButton } from './onboardingButton';

export const metadata = createMetaData({
  title: 'Onboarding',
  description: 'Quick onboarding process to the PA discord server',
  url: '/onboarding'
});

export default function Onboarding({ searchParams }) {

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
                <div className="section_body neg-mt-20 mobile-mt-20 section_text-cards">
                    <div className="section_text outline-gray">
                        <div className="text-sm_img extra_margin-letters">
                        <img src={"/img/onboarding/safety.png"} alt="" />
                        </div>
                        <div className="text-sm_desc">
                        <h2 className="section_subtitle margin-sm">Safety</h2>
                        <p>
                        We keep our community safe & maintain a good environment
                        </p>
                        <p>
                        We reserve the right to kick out anyone who's disruptive or unfit for the server.
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
                {!searchParams.section && (
                    <OnboardingButton endpoint="/onboarding?section=first#first">
                        Understood
                    </OnboardingButton>
                )}
            </div>
            {['first', 'second', 'third'].includes(searchParams.section) && (
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
                    {searchParams.section === 'first' && (
                        <OnboardingButton endpoint="/onboarding?section=second#second">
                            I am 16+
                        </OnboardingButton>
                    )}
                </div>
            )}
            {['second', 'third'].includes(searchParams.section) && (
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
                    {searchParams.section === 'second' && (
                        <OnboardingButton endpoint="/onboarding?section=third#third">
                            I am 16+
                        </OnboardingButton> 
                    )}
                </div>
            )}
            {searchParams.section === 'third' && (
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