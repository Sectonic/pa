import { TypePopup, PopupLoading } from '@components/type_popup/typePopup';
import { Entries, EntriesLoading } from './entries';
import { filter_exchange } from './filters';
import DatabaseSearch from './databaseSearch';
import { DatabaseContainer, DatabaseLoading } from './databaseContainer';
import { Suspense } from 'react';
import { createMetaData } from "@lib/metadata";
import { getSession } from '@lib/session';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Tabs from './tabs';

export const metadata = createMetaData({
  title: 'TypeSearch',
  description: 'A searchable database of the officially typed',
  image: '/embed/tools.png',
  url: '/apps/typesearch',
});

const getFilteredResults = (selectedOptions) => {
    var clean_filters = {

    };
    var names = 0;
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
            names++;
        }
    });

    if (clean_filters.hasOwnProperty('tag') && clean_filters.tag.in.includes('Community Member')) {
        clean_filters.tag.in = clean_filters.tag.in.filter(tag => tag !== 'Community Member');
    }

    const {tag, name, ...all_other_filters} = clean_filters;

    return {
        where: {
            name,
            typeData: {
                ...all_other_filters,
            },
            AND: [
                { tag },
                { tag: { not: 'Community Member' } }
            ]
        },
        orderBy: {
           id: 'desc'
        }
    };
}

const getTypeSearchParams = async (params) => {

    const queryFilters = JSON.parse(params.filters ? decodeURIComponent(params.filters) : '[]');
    const preFilters = queryFilters.map(filter => ({label: filter, value:filter}));
    const filters = getFilteredResults(queryFilters);
    const page = params.page ? Number(params.page) : 1;

    return ({
        page, 
        searchFilters: preFilters,
        queryFilters: filters, 
        popup: params.popup_id,
    })

}

export default async function Page({ searchParams }) {

    const session = getSession();
    if (!session) {
      redirect('/login?' + new URLSearchParams({callback: '/apps/typesearch?' + new URLSearchParams(searchParams), error: 'An account is required for TypeSearch'}));
    }

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
                                <Suspense fallback={<EntriesLoading/>} >
                                    <Entries/>
                                </Suspense>
                            </div>
                        </div>
                        <DatabaseSearch filters={searchFilters}  />
                        <div className='database_contact'>Want to add someone or fix something incorrect? <Link className='database_contact-link' href={"/contact?" + new URLSearchParams({ topic: 'TypeSearch', callback: '/apps/typesearch?' + new URLSearchParams(searchParams) })}>Contact Us</Link></div>
                    </div>
                    {/* <Tabs names={['Official', 'Community']} /> */}
                    {/* <Alert style={{marginBottom: 15}} prompt='Community Members are temporarily disabled in search' /> */}
                    <div className="db_card-container">
                        <Suspense fallback={<DatabaseLoading />}>
                            <DatabaseContainer page={page} filters={queryFilters} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}