"use client";

import { usePathname } from "next/navigation";
import DefaultNavigation from "./_nav/navigation";
import AdminNav from "./_nav/adminNav";

export default function NavContainer({ user, admin }) {
    const pathname = usePathname();

    if (pathname.startsWith('/admin')) {
        return <AdminNav admin={admin} />
    } else {
        return <DefaultNavigation user={user} />
    }
}