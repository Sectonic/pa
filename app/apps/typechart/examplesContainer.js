import { getExamples } from "@lib/typesearch";
import { Examples } from "./examples";

export const ExampleLoading = () => (
    <>
        {[...Array(9)].map((index) =>
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

export const ExamplesContainer = async ({ typeData }) => {
    function removeEmpty(obj) {
        delete obj.type
        delete obj.playModality
        delete obj.sleepModality
        delete obj.consumeModality
        delete obj.blastModality
        delete obj.temperment
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
    }
    
    const data = await getExamples(removeEmpty(typeData));
    
    return <Examples data={data} />
}