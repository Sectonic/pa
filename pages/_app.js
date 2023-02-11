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
import Navbar from '../components/nav';
import { useEffect, useState } from "react";
import { withRouter } from 'next/router';
import Head from 'next/head';
import Pages from '../public/json/pages.json';
import { Montserrat } from "@next/font/google";
import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';
import { Popup } from "../components/popup_main";

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

  useEffect(() => {
    let new_path = router.pathname.split('/');
    setPath(new_path);
  }, [router.pathname]); 

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/get/user`, {credentials: 'include'})
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          setUser(data);
        });
      }
    });
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
    fetch(`${process.env.NEXT_PUBLIC_API}/logout`, {credentials: 'include'}).then(res => {
      window.location.reload();
    })
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
          <div className='top_nav'>
            <div className='top_nav-box'>
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
                  <div>{user.username}</div>
                  <div className='user-box_img'>
                    <img src='/img/main/default_user.png' onClick={MenuVisible} />
                    {menu && (
                      <OutsideClickHandler onOutsideClick={MenuOutside}>
                        <div className='user-profile'>
                          <div className='user-profile_row' onClick={() => handlePopup(true, "account")}>
                            <img src='/img/main/settings.png'/>
                            <div>Account Settings</div>
                          </div>
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
        </>
      )}
      {popupShown && <Popup popup={handlePopup} type={popupType} />}
      <Component {...pageProps} user={user} />
      {['', 'typing', 'learn', 'resources',].includes(path[1]) && <div className='main_extra_padding'></div>}
    </div>)
}

export default withRouter(App)
