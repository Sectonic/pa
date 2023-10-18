"use client";

import { Children, useState, useEffect } from "react";
import { Type512Input } from "@components/type512Input";
import { useRouter, useSearchParams } from "next/navigation";
import { checkCorrectType, formatType } from "@lib/getTypeData";

export const TypeChartSearch = ({ type }) => {
    const [paramsType, setParamsType] = useState(type);
    const [error, setError] = useState('');
    const [Type512, setType512] = useState(paramsType || '');
    const router = useRouter();
    const params = useSearchParams();

    useEffect(() => {
        const newType = params.get('type');
        setParamsType(newType);
        setType512(newType || '')
    }, [params.get('type')])

    const analyzeType = (e) => {
        e.preventDefault();

        const formattedType = formatType(Type512);
        setType512(formattedType);
        const [modalities, functions, animals] = formattedType.split(' ');;
        const [function1, function2] = functions.split('/');

        const nextError = checkCorrectType({
            modalities, animals, function1, function2
        });

        if (nextError) {
            setError(nextError);
            return;
        }

        setError('');

        const newUrl = `/apps/typechart?` + new URLSearchParams({type: formattedType});
        router.push(newUrl, { scroll: false });
    }

    return (
        <>
            {error && <div className='register_error typechart_search-error'>{error}</div>}
            <div className="typechart_search_container">
                <form className="typechart_search" onSubmit={analyzeType}>
                    <Type512Input Type512={Type512} setType512={setType512} />
                    <div className="typechart_search-btn-container">
                        <button className="typechart_search-btn" type="submit">
                            <img src="/img/typechart/apply.png" />
                        </button>
                        <div className="typechart_search-btn" onClick={() => router.push('/apps/typechart', { scroll: false })}>
                            <img src="/img/main/delete.png" />
                        </div>
                    </div>
                </form>
                {/* <div className="typechart_search-btns">
                <div className="typechart_search-btn">
                        <img src="/img/typechart/typing.png" />
                    </div>
                    <div className="typechart_search-btn">
                        <img src="/img/typechart/compare.png" />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export const SpreadSheetBtn = ({ children, val }) => {
    const name = Children.toArray(children)[0];
    const router = useRouter();
    const params = useSearchParams();

    const changeSheet = () => {
        const newParams = new URLSearchParams(params);
        newParams.set('filter', val);
        router.push('/apps/typechart?' + newParams, { scroll: false });
    }

    return (
        <div onClick={changeSheet}>{name}</div>
    )

}