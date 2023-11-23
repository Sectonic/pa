"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function CommunityToggle() {
    const params = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleChange = () => {
        const otherOption = params.get('filter') === 'Community Only' ? '' : 'Community Only';
        const newParams = new URLSearchParams(params);
        newParams.set('filter', otherOption)
        router.push(pathname + '?' + newParams)
    }

    return (
        <div class="checkbox-wrapper-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px auto'}}>
            <input type="checkbox" id="cbx-3" checked={params.get('filter') === 'Community Only'} onChange={handleChange} />
            <label htmlFor="cbx-3" className="toggle"><span></span></label>
        </div>
    )
}