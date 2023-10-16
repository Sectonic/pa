import { useUser } from "@lib/user";
import DashboardBanner from "./banner";

export default async function Page() {
    const profile = await useUser(true);

    return (
        <div className="main">
            <DashboardBanner profile={profile} />
        </div>
    )
}