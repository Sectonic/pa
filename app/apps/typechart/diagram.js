"use client";

import typeAnalytics from '@public/json/typeAnalytics.json';
import { useSearchParams } from 'next/navigation';

export const Diagram = ({ name, src, value, rank, color, total }) => {

    const params = useSearchParams();

    const graphArr = Array.from({ length: 100 }, (_, i) => (i + 1) * 6.25).filter(num => num <= 100);

    function ordinal(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    return (
        <div className="typechart_diagram">
            <div className="typechart_diagram-title">
                <img src={src} />
                {name}
            </div>
            { value.length === 1 ? (
                <div className="typechart_diagram-value">{value[0]}%</div>
            ) : (
                <div className="typechart_diagram-value typechart_diagram_value__multiple">{value[0]}% - {value[1]}%</div>
            )}
            <div className="typechart_diagram-desc">Ranked <strong>{rank.length === 1 ? ordinal(rank[0]) : `${ordinal(rank[0])} - ${ordinal(rank[1])}`} out of {total || '512'}</strong></div>
            <div className="typechart_diagram-graph">
                {graphArr.map((bar, i) => {
                    const currentLower = bar - 6.25;
                    const currentUpper = bar;
                    const currentColor = color;
                    var opacity;
                    if (value.length === 1) {
                        opacity = value[0] >= currentLower && value[0] < currentUpper ? '100%' : '20%';
                    } else {
                        opacity = value[0] < currentUpper && value[1] >= currentLower ? '100%' : '20%';
                    }

                    if (!params.get('type') || params.get('type') === 'xx xx/xx xx/x(x)') {
                        opacity = '20%';
                    }

                    const height = typeAnalytics[name.toLowerCase()][bar.toString()] / Math.max(...Object.values(typeAnalytics[name.toLowerCase()]));
                    return <div style={{backgroundColor: currentColor, height: height * 85, opacity}} key={i} ></div>
                })}
            </div>
            <div className="typechart_diagram-graph__bottom">
                <div>0%</div>
                <div>100%</div>
            </div>
        </div>
    )
}