"use client";

import { cookieOptions } from "@components/config";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNav({ admin }) {
    const router = useRouter();

    const AdminLogout = () => {
        deleteCookie('PAadmin', cookieOptions);
        router.refresh();
    }

    return (
        <div className='top_nav'>
            <div className='top_nav-box'>
                <div className='logo-box menu_icon'>
                    <Link href="/admin" className="admin_menu_logo">
                        <img src='/img/main/logo.png'/>
                    </Link>
                </div>
                <Link href='/admin'>
                    <div className='logo-box'>
                        <img src='/img/main/logo.png' />
                        <div>
                        PA Admin
                        </div>
                    </div>
                </Link>
                <div className='user-box'>
                    { admin && admin === 'true' ? (
                        <div className='register-box'>
                            <div onClick={AdminLogout}>
                                <div className='register-box_btn'>
                                    <img src='/img/main/login_icon.png' />
                                    <div>
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='user-username admin_username'>Not Authorized</div>
                    )}
                </div>
            </div>
        </div>
    )
}