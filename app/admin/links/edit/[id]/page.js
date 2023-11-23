import { getLinkData } from "@lib/admin";
import EditLink from "./edit";

export default async function Page({ params }) {
    const data = await getLinkData(params.id);
    return <EditLink link={data} />
}