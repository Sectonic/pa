import '@css/base.css';
import '@css/change_section.css';
import '@css/database.css';
import '@css/diagram.css';
import '@css/home.css';
import '@css/learn_home.css';
import '@css/learn_page.css';
import '@css/popups.css';
import '@css/resources.css';
import '@css/typing.css';
import '@css/register.css';
import '@css/placeholder.css';
import '@css/academyplus.css';
import '@css/typetool.css';
import '@css/admin.css';
import "animate.css";

import { Montserrat } from "next/font/google";
import NavContainer from './navContainer';
import { useUser } from '@lib/user';
import { createMetaData } from '@lib/metadata';
import { getSession } from '@lib/session';
import { Analytics } from '@vercel/analytics/react';

const font = Montserrat ({ 
    weights: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
}); 

export const metadata = createMetaData({});

export default async function RootLayout({ children }) {

    const user = await useUser();
    const admin = getSession('PAadmin');

    return (
      <html lang="en">
        <body className={font.className}>
          <NavContainer user={user} admin={admin} />
          {children}
          <Analytics/>
        </body>
      </html>
    );
}