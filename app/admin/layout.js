import { getSession } from "@lib/session";
import Unauthorized from "./unauthorized";

export default function AdminLayout({ children }) {
    const admin = getSession('PAadmin');

    if (admin && admin === 'true') {
        return children;
    } else {
        return <Unauthorized/>;
    }

}