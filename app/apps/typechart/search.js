"use client";

import { useState } from "react";
import { Type512Input } from "@components/type512Input";
import { useRouter } from "next/navigation";
import { checkCorrectType } from "@lib/getTypeData";

export const TypeChartSearch = () => {
    const [searchType, setSearchType] = useState('type');
    const [error, setError] = useState('');
    const [Type512, setType512] = useState({modalities: '', function1: '', function2: '', saviorAnimals: '', animal3: '', animal4: ''});
    const router = useRouter();

    const getFullType = () => `${Type512.modalities} ${Type512.function1}/${Type512.function2} ${Type512.saviorAnimals}/${Type512.animal3}(${Type512.animal4})`;

    const analyzeType = () => {

        var emptyCount = 0;
        Object.values(Type512).forEach(part => {
            if (part === '') {
                emptyCount++;
            }
        })

        if (emptyCount > 0 && emptyCount < 6) {
            setError('Fill out entire 512 type in type selection');
            return;
        }

        if (emptyCount !== 6) {
            const nextError = checkCorrectType(Type512);
            if (nextError) {
                setError(nextError);
                return;
            }
        }

        setError('');

        const newUrl = emptyCount === 6 ? '/apps/typechart' : `/apps/typechart?` + new URLSearchParams({type: getFullType()});
        router.push(newUrl);
    }

    return (
        <div className="typechart_search_container">
            <div className="typechart_search-btn_container">
                <div className={`typechart_search-btn ${searchType === 'type' ? 'active' : ''}`} onClick={() => setSearchType('type')}>Type</div>
                <div className={`typechart_search-btn ${searchType !== 'type' ? 'active' : ''}`} onClick={() => setSearchType('coins')}>Coins</div>
            </div>
            <div className="typechart_search">
                {error && <div className='register_error typechart_search-error'>{error}</div>}
                <Type512Input Type512={Type512} setType512={setType512} />
            </div>
            <div className="typechart_search-submit" onClick={analyzeType}>
                <img src="/img/typechart/search.png" />
                <div>Analyze</div>
            </div>
        </div>
    )
}