import sheet from "./type_spreadsheet";
import { createMetaData } from "@lib/metadata";
import { SpreadSheetBtn, TypeChartSearch } from "./search";
import { getSession } from "@lib/session";
import { redirect } from "next/navigation";
import { getTypeData } from "@lib/getTypeData";
import { Suspense } from "react";
import { ExampleLoading, ExamplesContainer } from "./examplesContainer";
import Stack from "@components/type_popup/stack";
import { AnimalDiagram } from "@components/type_popup/animal_diagram";
import { Coin } from "./coins";
import { Diagram } from "./diagram";
import { CoinContainer } from "./coinContainer";

export const metadata = createMetaData({
  title: 'TypeTool',
  description: 'A type analyzer',
  image: '/embed/tools.png',
  url: '/apps/typetool',
});

export default async function TypeTool({ searchParams }) {
    
    function removeEmpty(obj) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
    }

    const session = getSession();
    if (!session) {
      redirect('/login?' + new URLSearchParams({callback: '/apps/typechart'}));
    }

    const spreadsheet_filters = getTypeData(searchParams.type || 'xx xx/xx xx/x(x)', false);
    const filters = getTypeData(searchParams.type || 'xx xx/xx xx/x(x)');
    const animals = ['SC/B(P)', 'SC/P(B)', 'SB/C(P)', 'SB/P(C)', 'CS/B(P)', 'CS/P(B)', 'CP/S(B)', 'CP/B(S)', 'BS/C(P)', 'BS/P(C)', 'BP/S(C)', 'BP/C(S)', 'PC/S(B)', 'PC/B(S)', 'PB/S(C)', 'PB/C(S)'];
    const typecolor_filter = searchParams.filter || 'Extroversion';

    const colorObj = {
        Extroversion: {
            name: 'extrovertIntrovert',
            Extrovert: 'type_red',
            Introvert: 'type_blue'
        },
        Oe: {

        },
        De: {

        }
    }

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
                    </div>
                </div>
            </div>
            <div className="typechart_container" id="container">
                <TypeChartSearch type={searchParams.type} />
                <div className="typechart_diagrams_container">
                    <div className="stack_container typechart_stack">
                        <Stack data={filters} />
                    </div>
                    <div className="animal_container typechart_animal">
                        <AnimalDiagram data={filters} />
                    </div>
                    <CoinContainer typeData={filters} >
                        <Coin coin={'oD'} keys={['Observer', 'Decider']} />
                        <Coin coin={'deciderNeed'} keys={['Di', 'De']} />
                        <Coin coin={'observerNeed'} keys={['Oi', 'Oe']} />
                        <Coin coin={'observerLetter'} keys={['N', 'S']} />
                        <Coin coin={'deciderLetter'} keys={['F', 'T']} />
                        <Coin coin={'energyAnimal'} keys={['Sleep', 'Play']} />
                        <Coin coin={'infoAnimal'} keys={['Consume', 'Blast']} />
                        <Coin coin={'energyInfo'} keys={['Info', 'Energy']} />
                        <Coin coin={'sensoryModality'} keys={['fS', 'mS']} />
                        <Coin coin={'deModality'} keys={['fDe', 'mDe']} />
                    </CoinContainer>
                </div>
                <div className="spreadsheet_container">
                    <div className="spreadsheet_banner">
                        <div className="spreadsheet_option">
                            Introvert/Extrovert
                            <img src="/img/main/section_btn.png" />
                            <div className="spreadsheet_option-dropdown">
                                <SpreadSheetBtn val="Extroversion">Introvert/Extrovert</SpreadSheetBtn>
                                <SpreadSheetBtn val="Oe">Oi/Oe</SpreadSheetBtn>
                                <SpreadSheetBtn val="De">Di/De</SpreadSheetBtn>
                            </div>
                        </div>
                    </div>
                    <div className="spreadsheet" id='filter'>
                        { [...Array(16).keys()].map(i => {
                            return (
                                <div className="spreadsheet_col" key={i}>
                                    <div className="spreadsheet_anim">{animals[i]}</div>
                                    <div className="spreadsheet_types">
                                        { sheet.matchFilters(removeEmpty(spreadsheet_filters)).slice((8*i), (8*i)+8).map((type, index) => {
                                            const filteringValue = type[colorObj[typecolor_filter].name];

                                            const giveCurve = () => {
                                                var returnedClass = `spreadsheet_type ${type.invisible ? 'invisible_type' : ''}`;
                                                returnedClass += ' ' + colorObj[typecolor_filter][filteringValue];
                                                
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
                <div className="typechart_split_container">
                    <div className="typechart_diagrams">
                        <Diagram
                            name="Extroversion"
                            src="/img/learn/ops/advanced/extroversion/extrovert.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                        <Diagram
                            name="Gather"
                            src="/img/icons/Needs/oe.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                        <Diagram
                            name="Extroversion"
                            src="/img/learn/ops/advanced/extroversion/extrovert.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                        <Diagram
                            name="Extroversion"
                            src="/img/learn/ops/advanced/extroversion/extrovert.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                        <Diagram
                            name="Extroversion"
                            src="/img/learn/ops/advanced/extroversion/extrovert.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                        <Diagram
                            name="Extroversion"
                            src="/img/learn/ops/advanced/extroversion/extrovert.png"
                            value={65.43}
                            rank={434}
                            colors={['#ff5639', '#692b38']}
                        />
                    </div>
                    { <div className="typechart_examples">
                        <Suspense fallback={<ExampleLoading/>} > 
                            <ExamplesContainer typeData={filters} />
                        </Suspense>
                    </div>}
                </div>
            </div>
        </div>
    )
}   