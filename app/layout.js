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
import '../styles/typetool.css';
import "animate.css";

import { Montserrat } from "next/font/google";
import Navigation from './nav';
import { useUser } from './_lib/user';

const font = Montserrat ({ 
    weights: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
}); 

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