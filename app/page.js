"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div className="main">
            <div className='home_banner'>
                <div className='home_banner-update' onClick={() => router.push('/?' + new URLSearchParams({ updates: '11/1/23' }), { scroll: false })}>
                    <img src='/img/main/sparkles.png' />
                    Official Project Release!
                </div>
                <div className='home_banner-title'>
                    Personality Theory Made <span>Simple.</span>
                </div>
                <div className='home_banner-subtitle'>
                    Unfold the spectrum of personality through a scientific perspective.
                </div>
                <div className='home_banner-hero-container'>
                    <img src='/img/home/hero.png' className='home_banner-hero' />
                </div>
            </div>
            <div className='home_section'>
                <div className='home_section_split'>
                    <div className='text-right'>
                        <div className='home_section-title'><span>Dive Deep</span> into Personality Theory</div>
                        <img className='home_section_description-img' src='/img/home/courses_icon.png' />
                        <div className='home_section_description-title'>A Variety of Courses</div>
                        <div className='home_section_description-text'>Discover personality theories and their applications through comprehensive yet simple to follow courses.</div>
                        <img className='home_section_description-img' src='/img/home/unbiased_icon.png' />
                        <div className='home_section_description-title'>An Unbiased Perspective</div>
                        <div className='home_section_description-text'>We focus on a more scientific and unbiased approach to personality. Our courses reflect on methodology and application.</div>
                    </div>
                    <div className='home_section_img-container home_section_img-container-lg'>
                        <img src='/img/home/courses_combined.png' />
                    </div>
                </div>
            </div>
            <div className='home_section'>
                <div className='home_section_split home_section_split-reverse'>
                    <div className='home_section_img-container'>
                        <img src='/img/home/combined_typesearch.png' />
                    </div>
                    <div>
                        <div className='home_section-title'>Understand Personality Through <span>Real People</span></div>
                        <img className='home_section_description-img' src='/img/home/explore_icon.png' />
                        <div className='home_section_description-title'>Go Beyond Theory</div>
                        <div className='home_section_description-text'>Search through a variety of typed individuals to better grasp how personality shows in the real world.</div>
                        <img className='home_section_description-img' src='/img/home/updates_icon.png' />
                        <div className='home_section_description-title'>Constant Updates</div>
                        <div className='home_section_description-text'>We are always keeping things up to date, and expanding with new features. TypeSearch is the largest and most frequenty updated OPS database.</div>
                    </div>
                </div>
            </div>
            <div className='home_section'>
                <div className='home_section_split'>
                    <div className='text-right'>
                        <div className='home_section-title'>Make It Your <span>Personality Platform</span></div>
                        <img className='home_section_description-img' src='/img/home/account.png' />
                        <div className='home_section_description-title'>Better With an Account</div>
                        <div className='home_section_description-text'>Sign up to transform this page into your own dashboard. Customize your profile, and access our latest and greatest tools!</div>
                        <img className='home_section_description-img' src='/img/home/options.png' />
                        <div className='home_section_description-title'>Endless Options</div>
                        <div className='home_section_description-text'>Study the theories, type alongside others, or hone your own skills, compete and rise to the top! Progress is our motto.</div>
                    </div>
                    <div className='home_section_img-container home_section_img-container-lg'>
                        <img src='/img/home/personality_platform.png' />
                    </div>
                </div>
            </div>
            <div className='home_footer-title'>Want to <span>Get Involved?</span></div>
            <div className='home_footer-btns'>
                <div onClick={() => router.push("/register")}>
                    <img src='/img/main/user.png' />
                    <div>Create your Account</div>
                </div>
                <div onClick={() => window.open("https://discord.com/invite/s4v5yQdnE9", "_blank")}>
                    <img src='/img/main/discord.png' />
                    <div>Join Our Discord</div>
                </div>
                <div onClick={() => router.push('/donate')}>
                    <img src='/img/main/support.png' />
                    <div>Support The Project</div>
                </div>
            </div>
            <div className='home_footer_subtitle'>Otherwise, Welcome to the Academy.</div>
      </div>
    );
}