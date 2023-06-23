"use client";

import { useState } from "react";
import { Type512Input } from "@components/type512Input";

export const TypeChartSearch = () => {
    const [searchType, setSearchType] = useState('type');
    const [Type512, setType512] = useState({modalities: '', function1: '', function2: '', saviorAnimals: '', animal3: '', animal4: ''});

    return (
        <div className="typechart_search_container">
            <div className="typechart_search-btn_container">
                <div className={`typechart_search-btn ${searchType === 'type' ? 'active' : ''}`} onClick={() => setSearchType('type')}>Type</div>
                <div className={`typechart_search-btn ${searchType !== 'type' ? 'active' : ''}`} onClick={() => setSearchType('coins')}>Coins</div>
            </div>
            <div className="typechart_search">
                <Type512Input Type512={Type512} setType512={setType512} />
            </div>
            <div className="typechart_search-submit">
                <img src="/img/typechart/search.png" />
                <div>Analyze</div>
            </div>
        </div>
    )
}