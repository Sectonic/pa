import Link from "next/link";
import { SearchInput } from "./search";
import { getViewData } from "@lib/admin";

export default async function Page({ searchParams }) {

    const data = await getViewData(searchParams.query);

    return (
        <div className="adminview_container">
            <div className="adminview_top">
                <h1>TypeSearch</h1>
                <Link href="/admin/view/add" className="adminview_add-btn">Add Entry</Link>
            </div>
            <SearchInput input={searchParams.query || ''} />
            {searchParams.query ? (
                <h4>Results for: {searchParams.query}</h4>
            ) : (
                <h4>Most Recent 20 Entries</h4>
            )}
            <div className="adminview_db">
                {data.map(entry => (
                    <div className="adminview_db_row">
                        <div className="adminview_db_row-id"># {entry.id}</div>
                        <div className="adminview_db_row-image">
                            <img src={entry.image}/>
                        </div>
                        <div className="adminview_db_row-name">{entry.name}</div>
                        <div className="adminview_db_row-type">{entry.type} {entry.social && '#' + entry.social}</div>
                        <d className="adminview_db_row-edit">
                            <Link href={`/admin/view/edit/${entry.id}`}>Edit</Link>
                        </d>
                    </div>
                ))}
            </div>
        </div>
    )
}