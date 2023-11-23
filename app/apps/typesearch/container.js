import { getTypes, getCommunityTypes } from '@lib/typesearch';
import Database from './database';
import Community from './community';

export const DatabaseLoading = () => (
    <div className='db_card-container'>
        {[...Array(50)].map((index) =>
            <div key={index} className="db_card">
                <div className="db_card-img db_card-img-empty load_wraper"><div className="activity"></div></div>
                <div className="db_card-text">
                    <div>
                        <h3 className="db_card-type_placehold load_wraper"><div className="activity"></div></h3>
                        <div className="db_card-type_placehold load_wraper"><div className="activity"></div></div>
                    </div>
                </div>
            </div>
        )}
    </div>
)

export const CommunityLoading = () => (
    <div className='db_card-container'>
        {[...Array(50)].map((index) =>
            <div key={index} className="db_card db_card-community">
                <div className="db_card-img db_card-img-empty load_wraper"><div className="activity"></div></div>
                <div className="db_card-text db_card-text-community">
                    <div>
                        <h3 className="db_card-type_placehold load_wraper"><div className="activity"></div></h3>
                        <div className="db_card-type_placehold load_wraper"><div className="activity"></div></div>
                    </div>
                </div>
            </div>
        )}
    </div>
)

export async function Container({ page, filters, tab }) {

    if (tab === 'Community Interviews') {
        const {types, count} = await getCommunityTypes(page, filters);
        return (
            <Community data={types} count={Math.ceil(count/50)} />
        )
    } else {
        const {types, count} = await getTypes(page, filters);
        return (
            <div className="db_card-container">
                <Database data={types} count={Math.ceil(count/50)} />
            </div>
        )
    }
}