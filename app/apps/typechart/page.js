import sheet from "./type_spreadsheet";
import { createMetaData } from "@lib/metadata";
import { TypeChartSearch } from "./search";
import { getSession } from "@lib/session";
import { redirect } from "next/navigation";

export const metadata = createMetaData({
  title: 'TypeTool',
  description: 'A type analyzer',
  image: '/embed/tools.png',
  url: '/apps/typetool',
});

export default async function TypeTool() {

    const session = getSession();
    if (!session) {
      redirect('/login?' + new URLSearchParams({callback: '/apps/typechart'}));
    }

    const filters = {};
    const animals = ['SC/B(P)', 'SC/P(B)', 'SB/C(P)', 'SB/P(C)', 'CS/B(P)', 'CS/P(B)', 'CP/S(B)', 'CP/B(S)', 'BS/C(P)', 'BS/P(C)', 'BP/S(C)', 'BP/C(S)', 'PC/S(B)', 'PC/B(S)', 'PB/S(C)', 'PB/C(S)'];

    return (
        <div className="main">
            <div className="banner banner_blue banner_search">
                <div className='banner_logo'>
                    <div className="banner_icon">
                    <img
                        src='/img/main/type_tool.png'
                    />
                    </div>
                    <div>
                        <h1 className='banner_text blue'>TypeChart</h1>
                        <h3 className='banner_subtitle'>Unfold the personality code</h3>
                    </div>
                </div>
                <TypeChartSearch />
            </div>
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