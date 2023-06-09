'use client';

import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';

export default function MobileNav({ backgroundMobile, mobileMenuOut, navMobile, path}) {
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