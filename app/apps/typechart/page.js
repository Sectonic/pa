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
import { extroversionAnalytics, gatherAnalytics, intuitionAnalytics, masculinityAnalytics, testForEveryType, thinkingAnalytics, getCoin } from "./analytics";
import { TypePopup, PopupLoading } from "@components/type_popup/typePopup";
import db from "@lib/prisma/client";
import * as fs from 'fs';
import ToTypeSearchBtn from "./toTypeSearch";

export const metadata = createMetaData({
  title: 'TypeTool',
  description: 'A type analyzer',
  image: '/embed/tools.png',
  url: '/apps/typetool',
});

export default async function TypeTool({ searchParams }) {

    // const allTypes = await db.type.findMany();
    // const percentages = Array.from({ length: 100 }, (_, i) => (i + 1) * 6.25).filter(num => num <= 100);
    // const percentageCounter = {};
    // allTypes.forEach(type => {
    //   const incompletes = ['Ox', 'Dx', 'x', 'De', 'Oe', 'Oi', 'Di', 'Nx', 'Tx', 'Sx', 'Fx'];
    //   if (!incompletes.some(incomplete => type.type.includes(incomplete))) {
    //     const coins = ['extroversion', 'openness', 'intuition', 'thinking', 'masculinity'];
    //     coins.forEach(coin => {
    //         const analytics = getCoin(coin, type.type);
    //         percentages.forEach(p => {
    //             const currentPercentage = analytics.value[0];
    //             const lowerP = p - 6.25;
    //             if (currentPercentage >= lowerP && currentPercentage < p) {
    //                 if (!percentageCounter.hasOwnProperty(coin)) percentageCounter[coin] = {};
    //                 if (percentageCounter[coin].hasOwnProperty(p)) percentageCounter[coin][p] += 1
    //                 else percentageCounter[coin][p] = 1
    //             }
    //         })
    //     })
    //   }
    // })
    // fs.writeFile('public/json/typeAnalytics.json', JSON.stringify(percentageCounter), (err) => console.log(err));

    const incomplete_parts = ['Ox', 'Dx', 'x', 'De', 'Oe', 'Oi', 'Di', 'Nx', 'Tx', 'Sx', 'Fx'];
    const incomplete = searchParams.type ? incomplete_parts.some(part => searchParams.type.includes(part)) : true;
    
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
            title: 'Introvert/Extrovert',
            name: 'extrovertIntrovert',
            Extrovert: 'type_red',
            Introvert: 'type_blue'
        },
        Oe: {
            title: 'Oi/Oe',
            name: 'observerNeed',
            Oe: 'type_red',
            Oi: 'type_blue'
        },
        De: {
            title: 'Di/De',
            name: 'deciderNeed',
            De: 'type_red',
            Di: 'type_blue'
        }
    }

    return (
        <div className="main">
            {searchParams.popup_id && (
                <Suspense fallback={<PopupLoading/>}>
                    <TypePopup popup_id={searchParams.popup_id} />
                </Suspense>
            )}
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
                    <div className="typechart_stack-animal_container">
                        <div className="stack_container typechart_stack">
                            <Stack data={filters} />
                        </div>
                        <div className="animal_container typechart_animal">
                            <AnimalDiagram data={filters} noSocial={true} />
                        </div>
                    </div>
                    <div className="typechart_spectrumview typechart_diagrams">
                        <div className="typechart_spectrumview_title">
                            <div className="typechart_title_small">Trait Spectrums</div>
                            <div className="typechart_subtitle_small">Displays where a type falls on the spectrum of activation within each trait</div>
                        </div>
                        { incomplete ? (
                            <div className="spectrumview_incomplete">
                                <div className="spectrumview_title">Incomplete Type</div>
                                <div className="spectrumview_subtitle">Trait spectrums do not work on incomplete types, input a full type</div>
                                <img src="/img/typechart/incomplete.png" className="spectrumview_incomplete-banner" />
                                <div className="spectrumview_incomplete-banner__bg"></div>
                            </div>
                        ) : (
                            <>
                                <Diagram
                                    name="Extroversion"
                                    src="/img/typechart/de.png"
                                    {...extroversionAnalytics(searchParams.type)}
                                    colors={['#288cff', '#ff5639']}
                                />
                                <Diagram
                                    name="Openness"
                                    src="/img/typechart/oe.png"
                                    {...gatherAnalytics(searchParams.type)}
                                    colors={['#288cff', '#ff5639']}
                                    total={512}
                                />
                                <Diagram
                                    name="Intuition"
                                    src="/img/typechart/n.png"
                                    {...intuitionAnalytics(searchParams.type)}
                                    // colors={['#aff457', '#ffc04f']}
                                    colors={['#288cff', '#ff5639']}
                                    total={128}
                                />
                                <Diagram
                                    name="Thinking"
                                    src="/img/typechart/t.png"
                                    {...thinkingAnalytics(searchParams.type)}
                                    // colors={['#ff4467', '#2dc3e2']}
                                    colors={['#288cff', '#ff5639']}
                                    total={128}
                                />
                                <Diagram
                                    name="Masculinity"
                                    src="/img/typechart/mDe.png"
                                    {...masculinityAnalytics(searchParams.type)}
                                    // colors={['#e332ba', '#182ed6']}
                                    colors={['#288cff', '#ff5639']}
                                    total={512}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="spreadsheet_container">
                    <div className="spreadsheet_banner">
                        <div className="spreadsheet_option">
                            {searchParams.filter ? colorObj[searchParams.filter].title : 'Introvert/Extrovert'}
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

                                                if (!searchParams.type || searchParams.type === 'xx xx/xx xx/x(x)') {
                                                    returnedClass += ' invisible_type';
                                                }
                                                
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
                <div className="typechart_examples-title">Type Examples</div>
                {!incomplete && (
                    <>
                        <div className="typechart_examples-subtitle">Want more examples?</div>
                        <ToTypeSearchBtn />
                    </>
                )}
                <div className="typechart_examples">
                    <Suspense fallback={<ExampleLoading/>} > 
                        <ExamplesContainer typeData={filters} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}   