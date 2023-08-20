import { getTypes } from '@lib/typesearch';
import Database from './database';

export const DatabaseLoading = () => (
    <>
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
    </>
)

export async function DatabaseContainer({ page, filters }) {

    const {types, count} = await getTypes(page, filters);

    return (
        <Database data={types} count={Math.ceil(count/50)} />
    )
}