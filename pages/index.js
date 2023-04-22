import { TypeAnimation } from 'react-type-animation';
import ChangeSection from '../components/change_section';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { Main } from 'next/document';
import { Popup } from '../components/popup_main';
import  { Popup } from '../components/popup_main';
import { useState } from 'react';

function Home() {
  const router = useRouter();
  const [popupShown, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("");

  const handlePopup = (choice, type) => {
    document.body.style.overflowY = "auto";
    if (choice) {
      document.body.style.overflowY = "hidden";
    }
    setPopupType(type);
    setPopup(choice);
  };
  const academyPlus = () => router.push('/academyplus');
  return (
    <div className="main">
       {popupShown && <Popup popup={handlePopup} type={popupType} />}
  return (
   <div className="main">
      {popupShown && <Popup popup={handlePopup} type={popupType} />}
      <div className="home_banner">
        <div>
          <h1 className="home_title">
            <div>
              <h1 className="home_title_text">
                <div className="home_title_top">Personality Academy</div>
                <div >Objective Personality Made
                <TypeAnimation
                  sequence={['Simple.', 2250, 'Doable.', 2250]}
                  repeat={Infinity}
                  style={{ marginLeft: '10px'}}
                  wrapper="span"
                  className="home_subtitle"
                  speed={20} 
                />
              </div>
              </h1>
            </div>
          </h1>
          <div className="home_dashboard">
          <div className="home_dashboard-sm" onClick={() => window.open("https://discord.com/invite/FcqsJHXCBR", '_blank').focus()}>
            <img src="/img/main/discord.png" className="updates_img" />
            <div className="home_lg-text">
              <div>
                Join Our
              </div>
              <div className="home_lg-textbig">
                Discord
              </div>
            </div>
          </div>
          <div className="home_dashboard-sm negml-10" onClick={academyPlus}>
            <img src="/img/main/support.png" className="updates_img" />
            <div className="home_lg-text">
              <div>
                Support With
              </div>
              <div className="home_lg-textbig">
                Academy Plus
              </div>
            </div>
          </div>
          <div className="home_dashboard-lg" 
          onClick={() => handlePopup(true, "updates")}>
          <div className="home_dashboard-lg" onClick={() => handlePopup(true, "updates")} >
            <img src="/img/main/launch.png" className="updates_img" />
            <div className="home_lg-text">
              <div>
              June 1st
              </div>
              <div className="home_lg-textbig">
                Project Launch!
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/main/logo.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Everything You'll Need</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/learn2.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Learn Personality</h3>
              <p>
                Unfold the objectively trackable spectrum of personality.
              </p>
            </div>
          </div>
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/type2.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type Objectively</h3>
              <p>
              Use proper methods to track personality type objectively.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/tools2.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">The Best Tools</h3>
              <p>
                We'll help you along the way with the best easy to use tools.
              </p>
            </div>
          </div>
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/improve2.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Actually Improve</h3>
              <p>
              Turn knowledge into action by taking theory into practice.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section extra_margin_section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/main/science.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Objective Personality Theory</h2>
        <p className="letters_subtitle">
        *We are not affiliated with OPS, all credit goes to the original creators.
        </p>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/target.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Objective Trackability</h3>
              <p>
                An objective spectrum of personality that actually makes sense.
              </p>
            </div>
          </div>
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/earth.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Down to Earth</h3>
              <p>
              Tracks things we see and hear every day, it's really nothing new.
              </p>
            </div>
          </div>
        </div>
        <ChangeSection link="/resources" text="Official Source" src="tools" />
      </div>
      <div className="section extra_margin_section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/academyplus/one.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">All The Best, For The Community</h2>
        <p className="letters_subtitle">
        A community project lead by Aze
        </p>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/positive.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Net Positive Impact</h3>
              <p>
                Pushing OPS forward by pioneering the best platform for knowledge.
              </p>
            </div>
          </div>
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/original.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">True To OPS</h3>
              <p>
              Concepts are made simple to understand while staying true to OPS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section typing_section extra_margin_section">
        <h2 className="section_title">Get Started</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray">
            <Link href="/typing/triangulation">
              <div>
                <img
                  src="/img/main/look.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Take a Peek</h3>
                <p>
                Read about Personality Theory
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray">
            <Link href="/typing/d&s_typing">
              <div>
                <img
                  src="/img/main/user.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Sign Up</h3>
                <p>
                  Access for free with an account
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section extra_margin_section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/main/science.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Free Stuff With an Account</h2>
        <ChangeSection link="/resources" text="Make an Account" src="tools" />
      </div>
    </div>
    </div>
  </div>
  );
}

export default Home;
