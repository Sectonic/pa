"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@lib/params";
// import Image from "../../_components/image";

export default function Database({ data, more }) {
    const router = useRouter();
    const params = useSearchParams();

    const handlePopup = (person_id) => {
        router.push('/apps/typesearch?' + createQueryString('popup_id', String(person_id), params) + `#${person_id}`);
    }

    const updateData = () => {
        const highNum = params.get('high') ? (Number(params.get('high')) + 50).toString() : "100";
        router.push('/apps/typesearch?' + createQueryString('high', highNum) + '#' + data.at(-1).id);
    }

    return (
        <>
            {data.map(person => {
                return(
                    <div id={person.id} key={person.id} className="db_card outline-gray db_card_hover" onClick={() => handlePopup(person.id)}>
                        {person.social && (
                        <div className='db_card-social'>
                                <img src={`/img/icons/social/${person.social}.png`} />
                        </div>
                        )}
                        {
                            person.image === null ? 
                            <div className="db_card-img db_card-img-empty"><img src="/pa/static/img/main/empty_img.png"/></div> :
                            <div className="db_card-img"><img src={person.image} /></div> 
                        }
                        <div className="db_card-text">
                            <div>
                                <h3>{person.name}</h3>
                                <p className="db_card-type">{person.type}</p>
                                {person.tag != null ? <p className="db_card-text-purple">{person.tag}</p> : null}
                            </div>
                        </div>
                    </div>
                )
            })}
            {more ? (
                <div className="db_update-btn-container" onClick={updateData}>
                    <button className="db_update-btn">
                        Load More
                    </button>
                </div>
            ) : (
                <div className="db_update-btn-container">
                </div>
            )}
        </>
    )
}