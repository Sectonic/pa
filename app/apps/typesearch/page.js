import { TypePopup, PopupLoading } from './typePopup';
import { Entries, EntriesLoading } from './entries';
import { filter_exchange } from './filters';
import DatabaseSearch from './databaseSearch';
import { DatabaseContainer, DatabaseLoading } from './databaseContainer';
import { Suspense } from 'react';
import { getSession } from '@lib/session';
import { redirect } from 'next/navigation';
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'TypeSearch',
  description: 'A searchable database of the officially typed',
  image: '/embed/tools.png',
  url: '/apps/typesearch',
});

const getFilteredResults = (selectedOptions) => {
    var clean_filters = {
        "format": 'created',
    };
    selectedOptions.forEach(filter => {
        var all_filters = filter_exchange[filter];
        all_filters.forEach(item => {
            let filter_col = clean_filters[item.name];
            if (filter_col) {
                if (!filter_col.includes(item.value)) {
                    clean_filters[item.name].push(item.value);
                }
            } else {
                clean_filters[item.name] = [item.value];
            }
        });
    });
    return clean_filters;
}

const getTypeSearchParams = async (params) => {

    const queryFilters = JSON.parse(params.filters ? params.filters : '[]');
    const filters = queryFilters.map(filter => ({label: filter, value:filter}));
    const highBound = params.high ? params.high : "50";
    const urlFilters = new URLSearchParams(getFilteredResults(queryFilters));
    const url = `${process.env.NEXT_PUBLIC_API}/types/0to${highBound}?` + urlFilters;

    return ({
        url, filters, 
        popup: params.popup_id,
    })

}

export default async function Page({ searchParams }) {

    const session = await getSession();
    if (!session) {
      redirect('/login');
    }

    const { url, filters, popup } = await getTypeSearchParams(searchParams);
      
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
                        <DatabaseSearch filters={filters}  />
                    </div>
                    <div className="db_card-container">
                        <Suspense fallback={<DatabaseLoading count={searchParams.high} />}>
                            <DatabaseContainer url={url} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}