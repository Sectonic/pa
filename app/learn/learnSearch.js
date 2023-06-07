"use client";

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export const LearnSearch = () => {
    const search = useRef(null);
    const router = useRouter();

    const checkReset = (e) => {
      if (e.target.value == "") {
        router.push('/learn');
      }
    }

    return (
        <div className="search_banner-input">
          <input className="search_input" placeholder="Search catalog" ref={search} onChange={checkReset} />
          <div className="search_input-btn" onClick={() => router.push('/learn?query=' + search.current.value)}>
            Find
          </div>
        </div>
    )
}