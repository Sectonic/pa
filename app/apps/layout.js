import { redirect } from "next/navigation";
import { getSession } from "@lib/session";

export default function AppsLayout({ children }) {

    const session = getSession();
    if (!session) {
      redirect('/login');
    }

    return children;
}