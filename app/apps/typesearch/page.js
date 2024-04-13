import { TypePopup, PopupLoading } from '@components/type_popup/typePopup';
import { filter_exchange } from './filters';
import DatabaseSearch from './databaseSearch';
import { CommunityLoading, Container, DatabaseLoading } from './container';
import { Suspense } from 'react';
import { createMetaData } from "@lib/metadata";
import { getSession } from '@lib/session';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Tabs from './tabs';
import TypeStatistics from './statistics';

export const metadata = createMetaData({
  title: 'TypeSearch',
  description: 'A searchable database of the officially typed',
  image: '/embed/tools.png',
  url: '/apps/typesearch',
});

const getFilteredResults = (selectedOptions, tab) => {
    var clean_filters = {

    };
    var names = 0;
    const community = tab === 'Community Interviews';
    selectedOptions.forEach(filter => {
        var all_filters = filter_exchange[filter];
        if (all_filters) {
            all_filters.forEach(item => {
                let filter_col = clean_filters[item.name];
                if (filter_col) {
                    if (!filter_col.in.includes(item.value)) {
                        clean_filters[item.name].in.push(item.value);
                    }
                } else {
                    clean_filters[item.name] = {
                        in: [item.value]
                    };
                }
            });
        } else if (tab !== 'Statistics') {
            if (community) {
                if (names > 0) {
                    clean_filters.name.push(filter);
                } else {
                    clean_filters.name = [filter]
                }
            } else {
                if (names > 1) {
                    clean_filters.OR.push({ name: { contains: filter } })
                } else if (names > 0 ) {
                    clean_filters.OR = [
                        { name: { contains: clean_filters.name.contains } },
                        { name: { contains: filter } },
                    ]
                    delete clean_filters.name;
                } else {
                    clean_filters.name = { contains: filter };
                }
            }
            names++;
        }
    });

    const {tag, name, OR, ...all_other_filters} = clean_filters;

    const rawTypeData = Object.fromEntries(Object.entries(all_other_filters).map(([key, value]) => [key, value.in]))

    if (tab === 'Statistics') {
        return {
            typeData: rawTypeData
        }
    }

    if (community) {

        return {
            name: name,
            typeData: rawTypeData
        }
    }


    const nameField = name ? { name } : { OR };

    return {
        where: {
            ...nameField,
            typeData: {
                ...all_other_filters,
            },
            tag,
            verified: true
        },
        orderBy: {
           id: 'desc'
        }
    };
}

const getTypeSearchParams = async (params) => {

    const queryFilters = JSON.parse(params.filters ? decodeURIComponent(params.filters) : '[]');
    const preFilters = queryFilters.map(filter => ({label: filter, value:filter}));
    const filters = getFilteredResults(queryFilters, params.tab || 'Officially Typed');
    const page = params.page ? Number(params.page) : 1;

    return ({
        page, 
        searchFilters: preFilters,
        queryFilters: filters, 
        popup: params.popup_id,
    })

}

export default async function Page({ searchParams }) {

    // const session = getSession();
    // if (!session) {
    //   redirect('/login?' + new URLSearchParams({callback: '/apps/typesearch?' + new URLSearchParams(searchParams), error: 'An account is required for TypeSearch'}));
    // }

    const { page, searchFilters, queryFilters, popup } = await getTypeSearchParams(searchParams);
      
    return (
        <div className="main">
            {popup && (
                <Suspense fallback={<PopupLoading/>}>
                    <TypePopup popup_id={popup} />
                </Suspense>
            )}
            <div className="db_background-exterior">
                <div className="db_background">
                    <div className="banner banner_blue banner-sm">
                        <div className='banner_logo'>
                            <div className="banner_icon">
                            <img
                                src='/img/main/database.png'
                            />
                            </div>
                            <div>
                                <h1 className='banner_text blue'>TypeSearch</h1>
                            </div>
                        </div>
                        <DatabaseSearch filters={searchFilters}  />
                        <div className='database_contact'>Want to add someone or fix something incorrect? <Link className='database_contact-link' href={"/contact?" + new URLSearchParams({ topic: 'TypeSearch', callback: '/apps/typesearch?' + new URLSearchParams(searchParams) })}>Contact Us</Link></div>
                    </div>
                    <Tabs names={['Officially Typed', 'Community Interviews', 'Statistics']} />
                    {/* <Alert style={{marginBottom: 15}} prompt='Community Members are temporarily disabled in search' /> */}
                    { searchParams.tab === 'Statistics' ? (
                        <TypeStatistics filters={queryFilters.typeData} />
                    ) : (
                        <Suspense fallback={searchParams.tab === 'Community Interviews' ? <CommunityLoading /> : <DatabaseLoading />}>
                            <Container page={page} filters={queryFilters} tab={searchParams.tab} />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}