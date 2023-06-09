"use client";

import { setSession } from "@lib/session";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Unauthorized() {
    const router = useRouter();
    const [error, setError] = useState();

    const formHandler = (e) => {
        e.preventDefault();
        if (e.target.passcode.value != process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setError('Incorrect Admin Passcode');
        } else {
            setSession('true', 'PAadmin');
            router.refresh();
        }
    }

    return (
        <div className="unauthorized_container">
            <form className="register_section" onSubmit={formHandler}>
                <img className="register_img" src="/img/main/logo.png"/>
                <div className="register_title">Admin Authorization</div>
                <div className="register_subtitle">Or <Link className="register_link" href="/">go home</Link> if you are not an admin</div>
                {error !== '' && <div className='register_error'>{error}</div>}
                <div className="register_inputs">
                    <div>
                        <label className="register_label">Passcode</label>
                        <input type="text" required name='passcode' />
                    </div>
                </div>
                <button type="submit" className="register_btn">Continue</button>
            </form>
        </div>
    )
}