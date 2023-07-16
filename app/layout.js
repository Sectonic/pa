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
import "animate.css";

import { Montserrat } from "next/font/google";
import {NavContainer, NavLoading} from './navContainer';
import { createMetaData } from '@lib/metadata';
import { Analytics } from '@vercel/analytics/react';
import Provider from './provider';
import { Suspense } from 'react';

const font = Montserrat ({ 
    weights: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
}); 

export const metadata = createMetaData({});

export default async function RootLayout({ children }) {

    return (
      <html lang="en">
        <body className={font.className}>
          <Provider>
              <Suspense fallback={<NavLoading />}>
                <NavContainer />
              </Suspense>
              {children}
            <Analytics/>
          </Provider>
        </body>
      </html>
    );
}