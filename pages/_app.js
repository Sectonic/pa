import '../styles/base.css';
import '../styles/change_section.css';
import '../styles/database.css';
import '../styles/diagram.css';
import '../styles/home.css';
import '../styles/learn_home.css';
import '../styles/learn_page.css';
import '../styles/popups.css';
import '../styles/resources.css';
import '../styles/typing.css';
import '../styles/register.css';
import '../styles/placeholder.css';
import '../styles/academyplus.css';
import "animate.css";
import Navbar from '../components/nav';
import { useEffect, useState, useRef } from "react";
import { withRouter } from 'next/router';
import Head from 'next/head';
import Pages from '../public/json/pages.json';
import { Montserrat } from "next/font/google";
import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';
import { Popup } from "../components/popup_main";
import { deleteCookie } from 'cookies-next';
import { cookieOptions } from '../components/cookie_options';

const font = Montserrat ({ 
  weights: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
}); 

function App({ Component, pageProps, router }) {
  const [path, setPath] = useState('');
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);
  const [popupShown, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const backgroundMobile = useRef(null);
  const navMobile = useRef(null);

  useEffect(() => {
    let new_path = router.pathname.split('/');
    setMobileMenu(false);
    setPath(new_path);
  }, [router.pathname]); 

  const getUser = async () => {
    setLoading(true);
    let request = await fetch(`/api/get_user`, {credentials: 'same-origin'});
    let data = await request.json();
    if (request.ok) {
      setUser({
        active:true,
        username: data.username,
        email: data.email,
        plus: data.plus
      })
    } else {
      if (request.status === 500) {
        deleteCookie('hash', cookieOptions);
        window.location.reload();
      }
      setUser({
        active: false,
        username: null,
        email: null,
        plus: false
      })
    }
    setLoading(false);
  }

  useEffect(() => {
    getUser();
  }, [])

  const handlePopup = (choice, type) => {
    document.body.style.overflowY = "auto";
    if (choice) {
      document.body.style.overflowY = "hidden";
    }
    setPopupType(type);
    setPopup(choice);
  };

  const MenuVisible = () => {
    setMenu(!menu);
  }

  const MenuOutside = () => {
    if (menu) {
      setMenu(false);
    }
  }

  const Logout = () => {
    deleteCookie('hash', cookieOptions);
    window.location.reload();
  }

  const mobileMenuOut = () => {
    if (mobileMenu) {
      backgroundMobile.current.classList.add('animate__fadeOut');
      navMobile.current.classList.add('animate__slideOutLeft');
      setTimeout(() => {
        setMobileMenu(false);
      }, 500)
    }
  }
  
  return (
    <div className={font.className}>
      <Head>
        <title>{path && Pages[path[path.length - 1]]["title"]} | Personality Academy</title>
        <meta content={`${path && Pages[path[path.length - 1]]['title']} | Personality Academy`} property="og:title" />
        <meta content={`${path && Pages[path[path.length - 1]]['description']}`} property="og:description" />
        <meta content={`https://personalityacademy.netlify.app/${router.pathname}`} property="og:url" />
        <meta content={`https://personalityacademy.netlify.app/img/embed/${path && Pages[path[path.length - 1]]["img"]}.png`} property="og:image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      { !['register', 'login'].includes(path[path.length - 1]) && (
        <>
          <Navbar section={path[1]} />
          {mobileMenu && (
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
          )}
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
              {loading ? (
                <div className='user-box'>
                  <div class="lds-ellipsis small_loader"><div></div><div></div><div></div><div></div></div>
                </div>
              ) : (
                <>
                  {user && user.active ? (
                    <div className='user-box'>
                      <div className='user-username'>{user.username}</div>
                      <div className='user-box_img'>
                        <div className='user_img' onClick={MenuVisible}>{user.username[0]}</div>
                        {menu && (
                          <OutsideClickHandler onOutsideClick={MenuOutside}>
                            <div className='user-profile animate__animated animate__zoomIn'>
                              <div className='user-profile_row' onClick={() => handlePopup(true, "account")}>
                                <img src='/img/main/settings.png'/>
                                <div>Account Settings</div>
                              </div>
                              <form action='/api/customer_portal' method='POST'>
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
                </>
              )}
            </div>
          </div>
        </>
      )}
      {popupShown && <Popup popup={handlePopup} type={popupType} data={user} />}
      <Component {...pageProps} user={user} getUser={getUser} />
    </div>)
}

export default withRouter(App)
