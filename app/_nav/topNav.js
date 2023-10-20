'use client';

import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteCookie } from 'cookies-next';
import { cookieOptions } from '@components/config';
import { getPortal } from '@lib/customer';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NotificationCenter from './notificationCenter';

export default function TopNav({ setPopup, setMobileMenu, MenuVisible, MenuOutside, menu, user }) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
  
    const Logout = async () => {
      deleteCookie('PAsession', cookieOptions);
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
      <>
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
                    <Link href='/dashboard' className='user-dashboard'>Dashboard</Link>
                    <NotificationCenter />
                    <Link href={`/contact?` + new URLSearchParams({callback: pathname !== '/' ? pathname + (params ? `?${new URLSearchParams(params)}` : '') : '/'})} className='register-box_btn topnav_extras'>
                      <img src='/img/main/mail.png'/>
                    </Link>
                    <div className='user-box_img'>
                        <div className='user_img' onClick={MenuVisible}>{user.username[0]}</div>
                        {menu && (
                        <OutsideClickHandler onOutsideClick={MenuOutside}>
                            <div className='user-profile animate__animated animate__zoomIn'>
                            <div className='user-profile_row user-profile_row__blank'>Hey, {user.username}</div>
                            <div className='user-profile_row' onClick={() => setPopup(true)}>
                                <img src='/img/main/settings.png'/>
                                <div>Account Settings</div>
                            </div>
                            {/* <form method='POST' onSubmit={useSubscription}>
                                <button className='user-profile_row user-profile_row-btn' type='submit'>
                                <img src='/img/main/subscription.png'/>
                                <div>Subscription</div>
                                </button>
                            </form> */}
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
                      <Link href={`/login?` + new URLSearchParams({callback: pathname !== '/' ? pathname + (params ? `?${new URLSearchParams(params)}` : '') : '/'})}>
                          <div className='register-box_btn'>
                          <img src='/img/main/login_icon.png' />
                          <div>
                              Log In
                          </div>
                          </div>
                      </Link>
                      <Link href={`/register?` + new URLSearchParams({callback: pathname !== '/' ? pathname + (params ? `?${new URLSearchParams(params)}` : '') : '/'})}>
                          <div className='register-box_btn'>
                          <img src='/img/main/signup_icon.png' />
                          <div>
                              Sign Up
                          </div>
                          </div>
                      </Link>
                    </div>
                  )}
            </div>
        </div>  
      </>
    )
  }