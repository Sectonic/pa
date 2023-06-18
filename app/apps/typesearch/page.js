import { TypePopup, PopupLoading } from './typePopup';
import { Entries, EntriesLoading } from './entries';
import { filter_exchange } from './filters';
import DatabaseSearch from './databaseSearch';
import { DatabaseContainer, DatabaseLoading } from './databaseContainer';
import { Suspense } from 'react';
import { createMetaData } from "@lib/metadata";
import { getSession } from '@lib/session';
import { redirect } from 'next/navigation';

export const metadata = createMetaData({
  title: 'TypeSearch',
  description: 'A searchable database of the officially typed',
  image: '/embed/tools.png',
  url: '/apps/typesearch',
});

const getFilteredResults = (selectedOptions) => {
    var clean_filters = {
    };
    selectedOptions.forEach(filter => {
        var all_filters = filter_exchange[filter];
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
    });
    return {
        where: clean_filters,
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
      redirect('/login?' + new URLSearchParams({callback: '/apps/typesearch?' + new URLSearchParams(searchParams)}));
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
                    </div>
                    <div className="db_card-container">
                        {!popup ? (
                            <Suspense fallback={<DatabaseLoading />}>
                                <DatabaseContainer page={page} filters={queryFilters} />
                            </Suspense>
                        ) : (
                            <DatabaseLoading />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}