"use client";

import { useRouter, useSearchParams } from "next/navigation";

const possibleOptions = {

}

const ToTypeSearchBtn = () => {
    const params = useSearchParams();
    const router = useRouter();

    const handleTypeSearch = () => {
        const type = params.get('type');
        if (!type || type === 'xx xx/xx xx/x(x)') {
            router.push('/apps/typesearch');
            return;
        }
        const typeSearchOptions = [];
        const incompletes = ['Ox', 'Dx', 'x', 'De', 'Oe', 'Oi', 'Di', 'Nx', 'Tx', 'Sx', 'Fx', 'FX', 'XF', 'MX', 'XM'];
        type.split(' ').forEach(part => {
            if (!incompletes.some(incomplete => part.includes(incomplete))) {
                typeSearchOptions.push(part);
            } else {
                typeSearchOptions.push(possibleOptions[part]);
            }
        })

        if (typeSearchOptions.length === 0) {
            router.push('/apps/typesearch');
            return;
        }

        const url = '/apps/typesearch?' + new URLSearchParams({ filters: JSON.stringify(typeSearchOptions), page: 1 });
        router.push(url);

    }

    return (
        <div className="typechart_examples-btn" onClick={handleTypeSearch}>
            <img src="/img/typechart/search.png" />
            Open in TypeSearch
        </div>
    )
}

export default ToTypeSearchBtn;