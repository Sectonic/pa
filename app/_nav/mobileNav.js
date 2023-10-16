'use client';

import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';

export default function MobileNav({ backgroundMobile, mobileMenuOut, navMobile, path}) {
    return (
        <div className='mobile_menu animate__animated animate__fadeIn' ref={backgroundMobile}>
              <OutsideClickHandler onOutsideClick={mobileMenuOut}>
                <div className='mobile_menu-base animate__animated animate__slideInLeft animate__faster' ref={navMobile}>
                  <div className='mobile_menu-nav'>
                    <Link href='/dashboard'>
                      <div className={`mobile_menu-link ${path[1] == '' && 'mobile_menu-link--selected'}`}>
                        <div>Dashboard</div>
                        <img src='/img/main/dashboard.png'/>
                      </div>
                    </Link>
                    <Link href='/'>
                      <div className={`mobile_menu-link ${path[1] == '' && 'mobile_menu-link--selected'}`}>
                        <div>Home</div>
                        <img src='/img/main/home.png'/>
                      </div>
                    </Link>
                    <Link href='/aboutus'>
                      <div className={`mobile_menu-link ${path[1] == 'about' && 'mobile_menu-link--selected'}`}>
                        <div>About Us</div>
                        <img src='/img/main/about.png'/>
                      </div>
                    </Link>
                    <Link href='/learn'>
                      <div className={`mobile_menu-link ${path[1] == 'learn' && 'mobile_menu-link--selected'}`}>
                        <div>Learn</div>
                        <img src='/img/main/learn.png'/>
                      </div>
                    </Link>
                    <Link href='/apps/typechart'>
                      <div className={`mobile_menu-link ${path[1] == 'typing' && 'mobile_menu-link--selected'}`}>
                        <div>TypeChart</div>
                        <img src='/img/main/type_tool.png'/>
                      </div>
                    </Link>
                    <Link href='/apps/typesearch'>
                      <div className={`mobile_menu-link ${path[1] == 'apps' && 'mobile_menu-link--selected'}`}>
                        <div>TypeSearch</div>
                        <img src='/img/main/database.png'/>
                      </div>
                    </Link>
                    <Link href='/resources'>
                      <div className={`mobile_menu-link ${path[1] == 'resources' && 'mobile_menu-link--selected'}`}>
                        <div>Resources</div>
                        <img src='/img/main/resources.png'/>
                      </div>
                    </Link>
                  </div>
              </div>
            </OutsideClickHandler>
        </div>
    )
}