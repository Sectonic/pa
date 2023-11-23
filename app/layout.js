import '@css/base.css';
import '@css/change_section.css';
import '@css/database.css';
import '@css/diagram.css';
import '@css/home.css';
import '@css/learn_home.css';
import '@css/learn_page/section.css';
import '@css/learn_page/banner.css';
import '@css/popups.css';
import '@css/resources.css';
import '@css/typing.css';
import '@css/register.css';
import '@css/placeholder.css';
import '@css/academyplus.css';
import '@css/typechart.css';
import '@css/admin.css';
import '@css/dashboard.css';
import '@css/footer.css';
import '@css/donate.css';
import '@css/checkbox.css';
import "animate.css";

import { Lexend } from "next/font/google";
import {NavContainer, NavLoading} from './navContainer';
import { createMetaData } from '@lib/metadata';
import Provider from './provider';
import { Suspense } from 'react';
import SideNav from './_nav/sideNav';
import UpdatesPopupContainer from './updatesPopup';
import Footer from '@components/footer';
import Script from 'next/script';

const font = Lexend ({ 
    weights: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
}); 

export const metadata = createMetaData({
  image: '/img/embed/home.png'
});

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="gtm-script" strategy="lazyOnload">
          {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                      });
                  `}
        </Script>
      </head>
      <body className={font.className}>
        <UpdatesPopupContainer />
        <Provider>
            <Suspense fallback={<NavLoading />}>
              <NavContainer />
            </Suspense>
            <div className='page_container'>
              <SideNav />
              {children}
            </div>
            <Footer />
        </Provider>
      </body>
    </html>
  );
}