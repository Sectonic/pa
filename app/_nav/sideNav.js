'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav(props) {
  const pathname = usePathname();


  if (pathname.includes('admin') || pathname.includes('register') || pathname.includes('login')) {
    return <></>
  }

  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_bar">
          <Link href="/">
            <li className={props.section === "" || null ? "selected_nav" : undefined} id="home_nav">
                <img
                  src={"/img/main/home.png"}
                  alt="learn icon"
                />
            </li>
          </Link>
          <Link href="/learn">
            <li className={props.section === "learn" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/learn.png"}
                  alt="learn icon"
                />
                <div className='tool_tip'>Learn</div>
            </li>
          </Link>
          <Link href="/apps/typechart">
            <li className={props.section === "typetool" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/type_tool.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>TypeChart</div>
            </li>
          </Link>
          <Link href="/apps/typesearch">
            <li className={props.section === "database" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/database.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>TypeSearch</div>
            </li>
          </Link>
          <Link href="/resources">
            <li className={props.section === "resources" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/resources.png"}
                  alt="resources icon"
                />
                <div className='tool_tip'>Resources</div>
            </li>
          </Link>
          <Link href="/aboutus">
            <li className={props.section === "about" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/about.png"}
                  alt="learn icon"
                />
                <div className='tool_tip'>About</div>
            </li>
          </Link>
          {/* <Link href="/academyplus">
            <li className={props.section === "academyplus" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/support.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>Plus</div>
            </li>
          </Link> */}
        </div>
      </div>
    </div>
  );
}