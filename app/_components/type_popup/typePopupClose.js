"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { createQueryString } from "@lib/params";

export const TypePopupClose = ({ person_id }) => {
    const router = useRouter();
    const params = useSearchParams();

    const onClose = () => {
        router.push('/apps/typesearch?' + createQueryString('popup_id', '', params) + `#${person_id}`);
    }

    return (
        <div className="popup_exit" onClick={onClose}>
        <img
          src="/img/main/cross.png"
          alt=""
        />
      </div> 
    )
}