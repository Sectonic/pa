'use client';

import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteCookie } from 'cookies-next';
import { useState, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';
import AccountPopup from './accountPopup';
import { cookieOptions } from '@components/config';
import { getPortal } from '@lib/customer';

function SideNav(props) {
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_bar">
        <Link href="/">
            <li className={props.section === "" || null ? "selected_nav" : undefined} id="home_nav">
                <img
                  src={"/img/main/home.png"}
                  alt="learn icon"
                />
            </li>
          </Link>
          <Link href="/learn">
            <li className={props.section === "learn" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/learn.png"}
                  alt="learn icon"
                />
                <div className='tool_tip'>Learn</div>
            </li>
          </Link>
          <Link href="/typing">
            <li className={props.section === "typing" ? "selected_nav" : undefined}>
                <img src={"/img/main/typing.png"} alt="typing icon" />
                <div className='tool_tip'>Typing</div>
            </li>
          </Link>
          <Link href="/apps">
            <li className={props.section === "apps" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/tools.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>Apps</div>
            </li>
          </Link>
          <Link href="/resources">
            <li className={props.section === "resources" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/resources.png"}
                  alt="resources icon"
                />
                <div className='tool_tip'>Resources</div>
            </li>
          </Link>
          <Link href="/academyplus">
            <li className={props.section === "academyplus" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/support.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>Plus</div>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileNav({ backgroundMobile, mobileMenuOut, navMobile, path}) {
    return (
        <div className='mobile_menu animate__animated animate__fadeIn' ref={backgroundMobile}>
              <OutsideClickHandler onOutsideClick={mobileMenuOut}>
                <div className='mobile_menu-base animate__animated animate__slideInLeft animate__faster' ref={navMobile}>
                  <div className='mobile_menu-nav'>
                    <Link href='/'>
                      <div className={`mobile_menu-link ${path[1] == '' && 'mobile_menu-link--selected'}`}>
                        <div>Home</div>
                        <img src='/img/main/home.png'/>
                      </div>
                    </Link>
                    <Link href='/learn'>
                      <div className={`mobile_menu-link ${path[1] == 'learn' && 'mobile_menu-link--selected'}`}>
                        <div>Learn</div>
                        <img src='/img/main/learn.png'/>
                      </div>
                    </Link>
                    <Link href='/typing'>
                      <div className={`mobile_menu-link ${path[1] == 'typing' && 'mobile_menu-link--selected'}`}>
                        <div>Typing</div>
                        <img src='/img/main/typing.png'/>
                      </div>
                    </Link>
                    <Link href='/apps'>
                      <div className={`mobile_menu-link ${path[1] == 'apps' && 'mobile_menu-link--selected'}`}>
                        <div>Apps</div>
                        <img src='/img/main/tools.png'/>
                      </div>
                    </Link>
                    <Link href='/resources'>
                      <div className={`mobile_menu-link ${path[1] == 'resources' && 'mobile_menu-link--selected'}`}>
                        <div>Resources</div>
                        <img src='/img/main/resources.png'/>
                      </div>
                    </Link>
                    <Link href='/academyplus'>
                      <div className={`mobile_menu-link ${path[1] == 'academyplus' && 'mobile_menu-link--selected'}`}>
                        <div>Plus</div>
                        <img src='/img/main/support.png'/>
                      </div>
                    </Link>
                  </div>
              </div>
            </OutsideClickHandler>
        </div>
    )
}

function TopNav({ setPopup, setMobileMenu, MenuVisible, MenuOutside, menu, user }) {
  const router = useRouter();

  const Logout = async () => {
    deleteCookie('hash', cookieOptions);
    window.location.href = '/';
  }

  const useSubscription = async (e) => {
    e.preventDefault();
    const url = await getPortal();
    if (url) {
      router.push(url);
    }
  }

  return (
    <div className='top_nav'>
        <div className='top_nav-box'>
            <div className='logo-box menu_icon'>
                <img src='/img/main/menu_icon.png' onClick={() => setMobileMenu(true)} />
            </div>
            <Link href='/'>
                <div className='logo-box'>
                    <img src='/img/main/logo.png' />
                    <div>
                    Personality.Academy
                    </div>
                </div>
            </Link>
            {user ? (
              <div className='user-box'>
                <div className='user-username'>{user.username}</div>
                <div className='user-box_img'>
                    <div className='user_img' onClick={MenuVisible}>{user.username[0]}</div>
                    {menu && (
                    <OutsideClickHandler onOutsideClick={MenuOutside}>
                        <div className='user-profile animate__animated animate__zoomIn'>
                        <div className='user-profile_row' onClick={() => setPopup(true)}>
                            <img src='/img/main/settings.png'/>
                            <div>Account Settings</div>
                        </div>
                        <form method='POST' onSubmit={useSubscription}>
                            <button className='user-profile_row user-profile_row-btn' type='submit'>
                            <img src='/img/main/subscription.png'/>
                            <div>Subscription</div>
                            </button>
                        </form>
                        <div className='user-profile_row' onClick={Logout}>
                            <img src='/img/main/logout_icon.png'/>
                            <div>Logout</div>
                        </div>
                        </div>
                    </OutsideClickHandler>
                    )}
                </div>
              </div>
              ) : (
                <div className='register-box'>
                  <Link href='/login'>
                      <div className='register-box_btn'>
                      <img src='/img/main/login_icon.png' />
                      <div>
                          Login
                      </div>
                      </div>
                  </Link>
                  <Link href='/register'>
                      <div className='register-box_btn'>
                      <img src='/img/main/signup_icon.png' />
                      <div>
                          Signup
                      </div>
                      </div>
                  </Link>
                </div>
              )}
        </div>
    </div>  
  )
}

export default function Navigation ({ user }) {
    const pathname = usePathname();
    const backgroundMobile = useRef(null);
    const navMobile = useRef(null);
    const [menu, setMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [popup, setPopup] = useState(false);

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
                <SideNav section={pathname[1]} />
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


