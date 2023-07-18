"use client";

import { Children, useState } from "react";
import { Type512Input } from "@components/type512Input";
import { useRouter, useSearchParams } from "next/navigation";
import { checkCorrectType } from "@lib/getTypeData";

const emptyType = {modalities: '', function1: '', function2: '', saviorAnimals: '', animal3: '', animal4: ''}

export const TypeChartSearch = () => {
    const [error, setError] = useState('');
    const [Type512, setType512] = useState(emptyType);
    const router = useRouter();

    const getFullType = () => `${Type512.modalities} ${Type512.function1}/${Type512.function2} ${Type512.saviorAnimals}/${Type512.animal3}(${Type512.animal4})`;

    const analyzeType = () => {

        Object.values(Type512).forEach(part => {
            if (part === '') {
                setError('Fill out entire 512 type in type selection');
                return;
            }
        })

        const nextError = checkCorrectType(Type512);
        if (nextError) {
            setError(nextError);
            return;
        }

        setError('');

        const newUrl = `/apps/typechart?` + new URLSearchParams({type: getFullType()});
        router.push(newUrl);
    }

    return (
        <>
            {error && <div className='register_error typechart_search-error'>{error}</div>}
            <div className="typechart_search_container">
                <div className="typechart_search">
                    <Type512Input Type512={Type512} setType512={setType512} />
                    <div className="typechart_search-submit" onClick={analyzeType}>
                        Analyze
                        <img src="/img/typechart/search.png" />
                    </div>
                </div>
                <div className="typechart_search-btns">
                    <div className="typechart_search-btn">
                        <img src="/img/main/menu_icon.png" />
                    </div>
                    <div className="typechart_search-btn" onClick={() => {router.push('/apps/typechart'); setType512(emptyType)}}>
                        <img src="/img/main/delete.png" />
                    </div>
                </div>
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
        router.push('/apps/typechart?' + newParams + "#filter");
    }

    return (
        <div onClick={changeSheet}>{name}</div>
    )

}