"use client";

import { useRouter } from "next/navigation";

export const OnboardingButton = ({ children, endpoint }) => {
    const router = useRouter();

    const travel = () => {
        router.push(endpoint);
    }
    
    return (
        <div className='button_body section_body section_texts-sm neg-mt-20'>
            <div className='multi_paragraph page_btn' onClick={travel}>
                <div className="text-sm_img page_btn-img page_btn-img-sm">
                <img src="/img/onboarding/check.png" />
                </div>
                <div className="page_btn-text">
                    <h3 className="section_subtitle text-center">{children}</h3>
                </div>
            </div>
        </div>
    )
}