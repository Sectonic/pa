"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Tabs({ names }) {
    const params = useSearchParams();
    const router = useRouter();

    return (
        <>
            <div className='db_tab'>
                {names.map((name, i) => (
                    <div
                        key={i} 
                        className={`btn ${(params.get('tab') || "Officially Typed") === name ? 'active' : ''}`}
                        onClick={() => {
                            const newParams = new URLSearchParams(params);
                            newParams.set('tab', name);
                            if (name === 'Community Interviews') {
                                if (newParams.get('page')) {
                                    newParams.set('page', 1);
                                }
                                if (newParams.get('filters')) {
                                    const filters = newParams.get('filters') ? JSON.parse(decodeURIComponent(newParams.get('filters'))) : [];
                                    const valuesToRemove = ["Class Typing", "Mentioned"];
                                    const filteredFilters = filters.filter(filter => !valuesToRemove.includes(filter));
                                    newParams.set('filters', encodeURIComponent(JSON.stringify(filteredFilters)));
                                }
                            }
                            router.push('/apps/typesearch?' + newParams);
                        }}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <div className='db_line'></div>
        </>
    )
}