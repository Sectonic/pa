"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@lib/params";

export const TypePopupClose = ({ person_id }) => {
    const router = useRouter();
    const params = useSearchParams();
    const path = usePathname();

    const onClose = () => {
        router.push(path + '?' + createQueryString('popup_id', '', params) + `#${person_id}`);
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