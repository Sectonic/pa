import '../styles/base.css';
import '../styles/change_section.css';
import '../styles/database.css';
import '../styles/diagram.css';
import '../styles/home.css';
import '../styles/learn_home.css';
import '../styles/learn_page.css';
import '../styles/loading.css';
import '../styles/popups.css';
import '../styles/resources.css';
import '../styles/typing.css';
import Navbar from '../components/nav';
import { useEffect, useState } from "react";
import { withRouter } from 'next/router';
import Head from 'next/head';
import Pages from '../public/json/pages.json';
import { Inter } from "@next/font/google";

const font = Inter({ 
  weights: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
});

function App({ Component, pageProps, router }) {
  const [path, setPath] = useState('');
  useEffect(() => {
    let new_path = router.pathname.split('/');
    setPath(new_path);
  }, [router.pathname]);
  return (
    <div className={font.className}>
      <Head>
        <title>{path && Pages[path[path.length - 1]]["title"]} | Personality Academy</title>
      </Head>
      <Navbar section={path[1]} />
      <Component {...pageProps} />
    </div>)
}

export default withRouter(App)
