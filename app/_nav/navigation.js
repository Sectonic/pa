import { useState, useRef, useEffect } from "react";
import { usePathname } from 'next/navigation';
import AccountPopup from './accountPopup';
import TopNav from "./topNav";
import MobileNav from "./mobileNav";

export default function DefaultNavigation ({ user }) {
    const pathname = usePathname();
    const backgroundMobile = useRef(null);
    const navMobile = useRef(null);
    const [menu, setMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 775) {
            mobileMenuOut();
        }
    }, [pathname])

    const mobileMenuOut = () => {
        if (mobileMenu) {
            backgroundMobile.current.classList.add('animate__fadeOut');
            navMobile.current.classList.add('animate__slideOutLeft');
            setTimeout(() => {
            setMobileMenu(false);
            }, 500)
        }
    }

    const MenuVisible = () => {
        setMenu(!menu);
    }

    const MenuOutside = () => {
        if (menu) {
            setMenu(false);
        }
    }

    return (
        <>
            { !['/register', '/login'].includes(pathname) && (
                <>
                { mobileMenu && (
                    <MobileNav 
                        backgroundMobile={backgroundMobile} 
                        mobileMenuOut={mobileMenuOut} 
                        navMobile={navMobile} 
                        path={pathname.split('/')[1]} 
                    />
                )}
                <TopNav 
                    setPopup={setPopup} 
                    setMobileMenu={setMobileMenu} 
                    menu={menu}
                    MenuVisible={MenuVisible} 
                    MenuOutside={MenuOutside} 
                    user={user}
                  />
                </>
            )}
            { popup && <AccountPopup user={user} onClose={() => setPopup(false)} /> }
        </>
    )
}