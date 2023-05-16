import { TypeAnimation } from 'react-type-animation';
import ChangeSection from '../components/change_section';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { Popup } from '../components/popups/popup_main';
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
  return(
   <div className="main">
      {popupShown && <Popup popup={handlePopup} type={popupType} />}
      <div className="home_banner">
        <div>
          <h1 className="home_title">
            <div>
              <h1 className="home_title_text">
                <div className="home_title_top">Personality Academy </div>
                <div >Personality Theory Made
                <TypeAnimation
                  sequence={['Simple.', 2250, 'Doable.', 2250]}
                  repeat={Infinity}
                  style={{ marginLeft: '10px'}}
                  wrapper="span"
                  className="home_subtitle"
                  speed={10} 
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
                Academy+
              </div>
            </div>
          </div>
          <div className="home_dashboard-lg" onClick={() => handlePopup(true, "updates")} >
            <img src="/img/main/launch.png" className="updates_img" />
            <div className="home_lg-text">
              <div>
              June 1st
              </div>
              <div className="home_lg-textbig">
                Project Launched!
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
              src={"/img/main/o.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Objective Personality Theory</h2>
        <p className="letters_subtitle">
        *We are not affiliated, and do not take credit for the theory itself.
        <br/> We base our knowledge on the Objective Personality System (OPS).
        <br/> All credit goes to the original creators, Dave Powers & Shannon Renee. 
        <br/> For original content, check out the official sources below.
        </p>
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
        A community project lead by Aze.
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
        </div>
      </div>
    </div>
     );
}

export default Home;
