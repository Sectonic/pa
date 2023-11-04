"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { isMobile } from "react-device-detect";

export default function Footer() {
    const pathname = usePathname();
    const params = useSearchParams();

    if (pathname === '/success' && !isMobile) {
        return <></>;
    }

    return (
        <div className="footer">
            <div>
                <div className="footer_start">
                    <div className="footer_start-brand">
                        <img src='/img/main/logo.png' />
                        Personality.Academy
                    </div>
                    <div className="footer_start-desc">Personality Theory Made Simple.</div>
                </div>
                <div className="footer_end">
                    <div className="footer-col">
                        <Link href='/'>Home</Link>
                        <Link href='/dashboard'>Dashboard</Link>
                        <Link href='/apps/typechart'>TypeChart</Link>
                        <Link href='/apps/typesearch'>TypeSearch</Link>
                        <Link href='/resources'>Resources</Link>
                    </div>
                    <div className="footer-col">
                        <Link href='/ops'>OPS Course</Link>
                        <Link href='/typing'>Typing Course</Link>
                    </div>
                    <div className="footer-col">
                        <Link href='/aboutus'>About Us</Link>
                        <Link href={`/contact?` + new URLSearchParams({callback: pathname !== '/' ? pathname + (params ? `?${new URLSearchParams(params)}` : '') : '/'})}>Contact Us</Link>
                        <Link href='/donate'>Donate</Link>
                        <Link href='https://discord.com/invite/s4v5yQdnE9' target="_blank" rel="noopener noreferrer">Discord</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}