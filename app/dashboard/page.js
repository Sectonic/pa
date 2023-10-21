import { useUser } from "@lib/user";
import DashboardBanner from "./banner";

export default async function Page() {
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