import { getSession } from "@lib/session"
import Unauthorized from "./unauthorized";
import Link from "next/link";

export default function Page() {

    const admin = getSession('PAadmin');

    if (admin && admin === 'true') {
        return (
            <div className="admin_authorized">
                <div className="section typing_section">
                    <h2 className="section_title">Admin Control</h2>
                    <div className="section_body top_typing">
                    <div className="section_text outline-gray">
                        <Link href="/admin/view">
                            <div>
                                <img
                                src="/img/admin/eraser.png"
                                alt=""
                                className="typing_img-home"
                                />
                                <h3 className="typing_title-h3">View</h3>
                                <p>
                                    View and edit database entries
                                </p>
                        </div>
                        </Link>
                    </div>
                    <div className="section_text outline-gray">
                        <Link href="/admin/add">
                        <div>
                            <img
                            src="/img/admin/add.png"
                            alt=""
                            className="typing_img-home"
                            />
                            <h3 className="typing_title-h3">Add</h3>
                            <p>
                                Add new entries to the database
                            </p>
                        </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    } 

    return <Unauthorized/>
}