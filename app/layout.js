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
import "animate.css";

import { Montserrat } from "next/font/google";
import Navigation from './nav';
import { useUser } from '@lib/user';
import { createMetaData } from '@lib/metadata';

const font = Montserrat ({ 
    weights: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
}); 

export const metadata = createMetaData({});

export default async function RootLayout({ children }) {

    const user = await useUser();

    return (
      <html lang="en">
        <body className={font.className}>
          <Navigation user={user} />
          {children}
        </body>
      </html>
    );
}