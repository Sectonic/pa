import sheet from "./type_spreadsheet";
import { createMetaData } from "@lib/metadata";
import { TypeChartSearch } from "./search";
import { getSession } from "@lib/session";
import { redirect } from "next/navigation";
import { getTypeData } from "@lib/getTypeData";
import { Suspense } from "react";
import { ExampleLoading, ExamplesContainer } from "./examplesContainer";
import Stack from "@components/type_popup/stack";
import { AnimalDiagram } from "@components/type_popup/animal_diagram";
import { OptionDropdown, Option } from "app/admin/view/optionDropdown";

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

    const spreadsheet_filters = searchParams.type ? getTypeData(searchParams.type, false) : {};
    const filters = searchParams.type ? getTypeData(searchParams.type) : {};
    const animals = ['SC/B(P)', 'SC/P(B)', 'SB/C(P)', 'SB/P(C)', 'CS/B(P)', 'CS/P(B)', 'CP/S(B)', 'CP/B(S)', 'BS/C(P)', 'BS/P(C)', 'BP/S(C)', 'BP/C(S)', 'PC/S(B)', 'PC/B(S)', 'PB/S(C)', 'PB/C(S)'];
    const typecolor_filter = searchParams.Filter || 'Extroversion';

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
                        <h3 className='banner_subtitle'>Unfold the personality code</h3>
                    </div>
                </div>
                <TypeChartSearch />
            </div>
            <div className="spreadsheet_container">
                <div className="spreadsheet" id='Filter'>
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
                <div className="spreadsheet_check_container register_inputs">
                    <OptionDropdown name='Filter' desc='Filter type spreadsheet colors' changeParams={true} defaultValue={searchParams.Filter || 'Extroversion'} >
                            <Option>Extroversion</Option>
                            <Option>De</Option>
                            <Option>Oe</Option>
                    </OptionDropdown>
                </div>
            </div>
            <div className="typechart_split_container">
                <div className="typechart_diagram">
                    <h2>Diagram</h2>
                    <div className="diagram_container">
                        <div className="stack_container outline-gray">
                            <Stack data={filters} />
                        </div>
                        <div className="animal_container">
                            <AnimalDiagram data={filters} />
                            <div className="animals_analysis outline-gray">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="typechart_examples">
                    <h2>Type Twins/Cousins</h2>
                    <div className="typechart_examples-container">
                        <Suspense fallback={<ExampleLoading/>} > 
                            <ExamplesContainer typeData={filters} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}   