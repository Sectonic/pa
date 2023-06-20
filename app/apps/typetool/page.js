
import sheet from "./type_spreadsheet";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'TypeTool',
  description: 'A type analyzer',
  image: '/embed/tools.png',
  url: '/apps/typetool',
});

export default async function TypeTool() {
    // const [ filters, setFilters ] = useState({}); 
    const filters = {observerLetter: 'N'};
    const animals = ['SC/B(P)', 'SC/P(B)', 'SB/C(P)', 'SB/P(C)', 'CS/B(P)', 'CS/P(B)', 'CP/S(B)', 'CP/B(S)', 'BS/C(P)', 'BS/P(C)', 'BP/S(C)', 'BP/C(S)', 'PC/S(B)', 'PC/B(S)', 'PB/S(C)', 'PB/C(S)'];
    
    // useState(() => {
    //     setFilters({

    //     })
    // }, [])

    return (
        <div className="main">
            <div className="spreadsheet_container">
                <div className="spreadsheet">
                    { [...Array(16).keys()].map(i => {
                        return (
                            <div className="spreadsheet_col" key={i}>
                                <div className="spreadsheet_anim">{animals[i]}</div>
                                <div className="spreadsheet_types">
                                    { sheet.matchFilters(filters).slice((8*i), (8*i)+8).map((type, index) => {
                                        const giveCurve = () => {
                                            var returnedClass = `spreadsheet_type ${type.invisible ? 'invisible_type' : ''}`;
                                            if (index === 0) {
                                                return returnedClass + ' spreadsheet_type-top';
                                            } else if (index === 7) {
                                                return returnedClass + ' spreadsheet_type-bottom';
                                            } else {
                                                return returnedClass;
                                            }
                                        }
                                        return <div className={giveCurve()} key={index}>{type.functions}</div>
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