import Link from 'next/link';

function Navbar(props) {
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
          <Link href="/typing">
            <li className={props.section === "typing" ? "selected_nav" : undefined}>
                <img src={"/img/main/typing.png"} alt="typing icon" />
                <div className='tool_tip'>Typing</div>
            </li>
          </Link>
          <Link href="/academyapps">
            <li className={props.section === "academyapps" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/tools.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>Apps</div>
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
          <Link href="/academyplus">
            <li className={props.section === "academyplus" ? "selected_nav" : undefined}>
                <img
                  src={"/img/main/support.png"}
                  alt="tools icon"
                />
                <div className='tool_tip'>Academy+</div>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
