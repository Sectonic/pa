"use client";

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export const SearchInput = ({ input }) => {
    const search = useRef(null);
    const router = useRouter();

    const checkReset = (e) => {
        console.log(e.key);
        if (e.target.value == "") {
            router.push('/admin/view');
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            router.push('/admin/view?query=' + search.current.value);
        }
    }
    
    return (
        <div className="search_banner-input adminview-input">
            <input className="search_input" placeholder="Search ID/Name" onKeyDown={checkEnter} defaultValue={input} ref={search} onChange={checkReset}/>
            <div className="search_input-btn" onClick={() => router.push('/admin/view?query=' + search.current.value)}>
                Find
            </div>
        </div>
    )
}