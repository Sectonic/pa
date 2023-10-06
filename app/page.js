"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div className="main">
            <div className='home_banner'>
                <div className='home_banner-update' onClick={() => router.push('/?' + new URLSearchParams({ updates: '11/1/23' }), { scroll: false })}>
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
                    <img src='/img/home/hero.png' className='home_banner-hero' />
                </div>
            </div>
            <div className='home_section'>
                <div className='home_section_split'>
                    <div className='text-right'>
                        <div className='home_section-title'><span>Dive Deep</span> into Personality</div>
                        <img className='home_section_description-img' src='/img/home/courses_icon.png' />
                        <div className='home_section_description-title'>A Variety of Courses</div>
                        <div className='home_section_description-text'>Freely learn different personality theories and methodologies to get a better grasp of yourself and others. Courses will be continually added.</div>
                        <img className='home_section_description-img' src='/img/home/unbiased_icon.png' />
                        <div className='home_section_description-title'>An Unbiased Perspective</div>
                        <div className='home_section_description-text'>We focus on a trackable and unbiased perspective to personality. Our courses reflect on methods to alleviate your previous biases.</div>
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
                        <div className='home_section-title'>Explore the <span>World's</span> Personality</div>
                        <img className='home_section_description-img' src='/img/home/explore_icon.png' />
                        <div className='home_section_description-title'>Examples of All Personalities</div>
                        <div className='home_section_description-text'>Discover real examples of all the different personality types with almost 2000 people typed. Analyze them through our diagrams and video links.</div>
                        <img className='home_section_description-img' src='/img/home/updates_icon.png' />
                        <div className='home_section_description-title'>Constant Updates</div>
                        <div className='home_section_description-text'>We are constantly adding new people and features onto our tools. This is the largest and most up-to-date OPS database and will stay as such.</div>
                    </div>
                </div>
            </div>
            <div className='home_footer-title'>Want to <span>Get Involved?</span></div>
            <div className='home_footer-btns'>
                <div onClick={() => window.open("https://discord.com/invite/s4v5yQdnE9", "_blank")}>
                    <img src='/img/home/community.png' />
                    <div>Join Our Community</div>
                </div>
                <div onClick={() => window.open("https://paypal.me/AzeOriginal?country.x=DK&locale.x=en_US", "_blank")}>
                    <img src='/img/home/donate.png' />
                    <div>Donate and Support</div>
                </div>
            </div>
            <div className='home_footer_subtitle'>Otherwise, Welcome to the Academy.</div>
            <div className='home_footer-end'>
                <div className='home_footer_circle-xxl'></div>
                <div className='home_footer_circle-xl'></div>
                <div className='home_footer_circle-lg'></div>
                <div className='home_footer_circle-md'></div>
                <div className='home_footer_circle-sm'></div>
            </div>
      </div>
    );
}