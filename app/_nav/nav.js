"use client";

import { usePathname } from "next/navigation";
import DefaultNavigation from "./navigation";
import AdminNav from "./adminNav";

export const Nav = ({ user, admin }) => {
    const pathname = usePathname();

    if (pathname.startsWith('/admin')) {
        return <AdminNav admin={admin} />
    } else {
        return <DefaultNavigation user={user} />
    }
}