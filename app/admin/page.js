import Link from "next/link";

export default function Page() {

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
                            <h3 className="typing_title-h3">TypeSearch</h3>
                            <p>
                                Interact with the TypeSearch Database
                            </p>
                    </div>
                    </Link>
                </div>
                <div className="section_text outline-gray">
                    <Link href="/admin/links">
                        <div>
                            <img
                            src="/img/admin/link.png"
                            alt=""
                            className="typing_img-home"
                            />
                            <h3 className="typing_title-h3">TypeSearch Links</h3>
                            <p>
                                Interact with the Links in the Database
                            </p>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )

}