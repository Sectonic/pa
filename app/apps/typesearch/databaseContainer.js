import Database from './database';

export const DatabaseLoading = ({ count }) => (
    <>
        {[...Array(50)].map((index) =>
            <div key={index} className="db_card outline-gray">
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

const getData = async (url) => {
    const req = await fetch (url);
    const data = await req.json();
    const more = data.length < 50 ? false : true;
    
    return {data, more};
}

export async function DatabaseContainer({ url }) {

    const { data, more} = await getData(url);

    return (
        <Database data={data} more={more} />
    )
}