'use client';

import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteCookie } from 'cookies-next';
import { cookieOptions } from '@components/config';
import { getPortal } from '@lib/customer';
import { useRouter } from 'next/navigation';

export default function TopNav({ setPopup, setMobileMenu, MenuVisible, MenuOutside, menu, user }) {
    const router = useRouter();
  
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