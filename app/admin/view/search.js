"use client";

import { useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchInput = ({ input }) => {
    const search = useRef(null);
    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    const getUrl = (value) => {
        const newParams = new URLSearchParams(params);
        newParams.set('query', value);
        return `${pathname}?` + newParams;
    }

    const checkReset = (e) => {
        const newParams = new URLSearchParams(params);
        newParams.delete('query');
        if (e.target.value == "") {
            router.push(`${pathname}?` + newParams);
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            router.push(getUrl(search.current.value));
        }
    }
    
    return (
        <div className="search_banner-input adminview-input">
            <input className="search_input" placeholder="Search ID/Name" onKeyDown={checkEnter} defaultValue={input} ref={search} onChange={checkReset}/>
            <div className="search_input-btn" onClick={() => router.push(getUrl(search.current.value))}>
                Find
            </div>
        </div>
    )
}