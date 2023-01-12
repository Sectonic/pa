import Link from 'next/link';

function Navbar(props) {
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_top">
          <Link href="/">
            <div className="nav_logo">
              <img src={"/img/main/logo.png"} alt="logo" />
            </div>
          </Link>
        </div>
        <ul className="nav_bar">
        <Link href="/">
            <li className={props.section === "" || null ? "selected_nav" : undefined} id="home_nav">
              <div>
                <img
                  src={"/img/main/home.png"}
                  alt="learn icon"
                />
              </div>
              <span>Home</span>
            </li>
          </Link>
          <Link href="/learn">
            <li className={props.section === "learn" ? "selected_nav" : undefined}>
              <div>
                <img
                  src={"/img/main/learn_icon.png"}
                  alt="learn icon"
                />
              </div>
              <span>Learn</span>
            </li>
          </Link>
          <Link href="/typing">
            <li className={props.section === "typing" ? "selected_nav" : undefined}>
              <div>
                <img src={"/img/main/typing.png"} alt="typing icon" />
              </div>
              <span>Typing</span>
            </li>
          </Link>
          <Link href="/resources">
            <li className={props.section === "resources" ? "selected_nav" : undefined}>
              <div>
                <img
                  src={"/img/main/resources.png"}
                  alt="resources icon"
                />
              </div>
              <span>Resources</span>
            </li>
          </Link>
          <Link href="/typesearch">
            <li className={props.section === "typesearch" ? "selected_nav" : undefined}>
              <div>
                <img
                  src={"/img/main/database.png"}
                  alt="tools icon"
                />
              </div>
              <span>TypeSearch</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
