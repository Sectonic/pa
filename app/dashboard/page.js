import { useUser } from "@lib/user";
import DashboardBanner from "./banner";
import { getSession } from "@lib/session";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = getSession();
    if (!session) {
      redirect('/login?' + new URLSearchParams({callback: '/dashboard', error: 'An account is required for Dashboard'}));
    }

    const profile = await useUser(true);

    return (
        <div className="main">
            <div className="dashboard_container">
                <DashboardBanner profile={profile} />
                <div className="dashboard_coming-soon">
                    More coming soon
                </div>
            </div>
        </div>
    )
}