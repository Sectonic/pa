"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@lib/params";
import { Pagination } from "./pagination";

export default function Database({ data, count }) {
    const router = useRouter();
    const params = useSearchParams();

    const handlePopup = (person_id) => {
        router.push('/apps/typesearch?' + createQueryString('popup_id', String(person_id), params), { scroll: false });
    }

    return (
        <>  
            <Pagination currentPage={Number(params.get('page'))} top={true} count={count} />
            {data.map(person => {
                return(
                    <div id={person.id} key={person.id} className="db_card db_card_hover" onClick={() => handlePopup(person.id)}>
                        {person.typeData.social && (
                        <div className='db_card-social'>
                                <img src={`/img/icons/social/${person.typeData.social}.png`} alt="" />
                        </div>
                        )}
                        {
                            person.image === null ? 
                            <div className="db_card-img db_card-img-empty"><img src="/pa/static/img/main/empty_img.png"/></div> :
                            <div className="db_card-img"><img src={person.image} alt="" /></div> 
                        }
                        <div className="db_card-text">
                            <div>
                                <h3>{person.name}</h3>
                                <p className="db_card-type">{person.typeData.type}</p>
                                {person.tag != null ? <p className="db_card-text-purple">{person.tag}</p> : null}
                            </div>
                        </div>
                    </div>
                )
            })}
            <Pagination currentPage={Number(params.get('page'))} count={count} />
        </>
    )
}