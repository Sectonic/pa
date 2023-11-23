import Link from "next/link";
import { SearchInput } from "../view/search";
import { getLinksData } from "@lib/admin";
import CommunityToggle from "./communityToggle";

export default async function Page({ searchParams }) {

    const data = await getLinksData(searchParams.query, searchParams.filter === 'Community Only');

    return (
        <div className="adminview_container">
            <div className="adminview_top">
                <h1>TypeSearch Links</h1>
            </div>
            <SearchInput input={searchParams.query || ''} />
            <div style={{ textAlign: 'center', fontSize: 15 }}>Community Only</div>
            <CommunityToggle />
            {searchParams.query ? (
                <h4>Results for: {searchParams.query}</h4>
            ) : (
                <h4>Most Recent 10 {searchParams.filter === 'Community Only' && 'Community'} Links</h4>
            )}
            <div className="adminview_db adminview_db-links">
                { data.map((link, i) => (
                    <div key={i} className="adminview_link">
                        <div className="adminview_link-panel">
                            <div className="adminview_link-info">
                                <div className="adminview_link-info__id">#{link.id} | </div>
                                <div>
                                    <div className="adminview_link-info__title">{link.name}</div>
                                    <div className="adminview_link-info__url">{link.url}</div>
                                </div>
                            </div>
                            <div className="adminview_link-people">
                                {link.people.map((person, i) => (
                                    <div key={i}>{person.name} | {person.typeData.type} {person.typeData.social && '#' + person.typeData.social}</div>
                                ))}
                            </div>
                        </div>
                        <div  className="adminview_link-btn">
                            <Link href={`/admin/links/edit/${link.id}`}>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}