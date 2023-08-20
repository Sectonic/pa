"use server";

import Stack from "./stack";
import Link from "next/link";
// import Image from "../../_components/image";
import { TypePopupClose } from "./typePopupClose";
import { getType } from "@lib/typesearch";
import { AnimalDiagram } from "./animal_diagram";
import ToTypeChart from "./ToTypeChart";

const TypePopupTemplate = ({ children }) => (
  <div className="popup_bg animate__animated animate__fadeIn">
    <div className="popup_main animate__animated animate__fade_in">
      <div className="popup_bottom"></div>
      {children}
    </div>
  </div>
)

export const PopupLoading = () => (
  <TypePopupTemplate>
    <div className='popup_loading'>
        <div>
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
  </TypePopupTemplate>
)

export async function TypePopup({ popup_id }) {

  const data = await getType(Number(popup_id));
  const incomplete_parts = ['Ox', 'Dx', 'x', 'De', 'Oe', 'Oi', 'Di', 'Nx', 'Tx', 'Sx', 'Fx'];
  const incomplete = incomplete_parts.some(part => data.type.includes(part));

  return (
    <TypePopupTemplate>
      <TypePopupClose person_id={popup_id} />
      <div className="popup_text">
        <h2 className="popup_title">{data["name"]}</h2>
        <div className="type_top">
            <div className="type_top-img"><img src={data["image"]}/></div>
            <div className="type_top-info">
            <div className="type_top-info__full">
                <p className="db_card-type">{data['type']}</p>
                {data['tag'] != null ? <p className="db_card-text-purple">{data['tag']}</p> : <p className="db_card-text-purple">General</p> }
            </div>
            <div className="type_top-info__links">
                <div className="type_top-info__links-title">Links</div>
                {data['links'].map((person, i) => {
                return(
                    <Link href={person['url']} rel="noopener noreferrer" target="_blank" key={i}>
                    <div className="type_top-info_link">
                        <strong>{person['name']}</strong>
                    </div>
                    </Link>
                )
                })}
            </div>
            </div>
        </div>
        <div className="diagram_container">
            <div className="stack_container">
            <Stack data={data} />
            </div>
            <div className="animal_container">
                <AnimalDiagram data={data} />
                {incomplete ? (
                  <div className="animals_analysis animals_analysis-incomplete">
                    Unavaliable
                  </div>
                ) : (
                  <ToTypeChart type={data.type} />
                )}
            </div>
        </div>
      </div>
    </TypePopupTemplate>
  );
}