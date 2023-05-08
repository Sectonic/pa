import sheet from "../../components/type_spreadsheet";
import { useState } from "react";

export default function TypeTool() {
    const [ filters, setFilters ] = useState({}); 
    const animals = ['SC/B(P)', 'SC/P(B)', 'SB/C(P)', 'SB/P(C)', 'CS/B(P)', 'CS/P(B)', 'CP/S(B)', 'CP/B(S)', 'BS/C(P)', 'BS/P(C)', 'BP/S(C)', 'BP/C(S)', 'PC/S(B)', 'PC/B(S)', 'PB/S(C)', 'PB/C(S)'];

    useState(() => {
        setFilters({

        })
    }, [])

    return (
        <div className="main">
            <div className="spreadsheet_container">
                <div className="spreadsheet">
                    { [...Array(16).keys()].map(i => {
                        return (
                            <div className="spreadsheet_col">
                                <div className="spreadsheet_anim">{animals[i]}</div>
                                <div className="spreadsheet_types">
                                    { sheet.matchFilters(filters).slice((8*i), (8*i)+8).map(type => {
                                        return type.invisible ? (
                                            <div className="spreadsheet_type invisible_type">{type.functions}</div>
                                        ) : (
                                            <div className="spreadsheet_type">{type.functions}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}   