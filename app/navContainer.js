import { Nav } from "./_nav/nav";
import { useUser } from "@lib/user";
import { getSession } from "@lib/session";
import Link from "next/link";

export async function NavContainer() {
    const user = await useUser();
    const admin = getSession('PAadmin');

    return <Nav user={user} admin={admin} />
}

export const NavLoading = () => (
    <div className='top_nav'>
        <div className='top_nav-box'>
            <div className='logo-box menu_icon'>
                <Link href="/" className="admin_menu_logo">
                    <img src='/img/main/logo.png'/>
                </Link>
            </div>
            <Link href='/'>
                <div className='logo-box'>
                    <img src='/img/main/logo.png' />
                    <div>
                        Personality.Academy
                    </div>
                </div>
            </Link>
            <div className='user-box'>
                <div className="lds-ellipsis small_loader"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </div>
)