import { getType } from "@lib/typesearch";
import Edit from "./edit";

export default async function Page({ params }) {
    const data = await getType(Number(params.id));
    return <Edit type={data} />
}