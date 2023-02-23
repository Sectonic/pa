import { TypeAnimation } from 'react-type-animation';
import ChangeSection from '../components/change_section';
import {useRouter} from 'next/router';
function Home() {
  const router = useRouter();
  const academyPlus = () => router.push('/academyplus');
  return (
    <div className="main">
      <div className="home_banner">
        <div>
          <h1 className="home_title">
            <div>
              <div className="home_title_img">
                <img src={"/img/main/logo.png"}/>
              </div>
              <h1 className="home_title_text">
                <div className="home_title_top">Objective Personality</div>
                <div >Made
                <TypeAnimation
                  sequence={['Simple.', 2250, 'Useful.', 2250, 'Doable.', 2250]}
                  repeat={Infinity}
                  style={{ marginLeft: '20px'}}
                  wrapper="span"
                  className="home_subtitle"
                  speed={20} 
                />
              </div>
              </h1>
            </div>
          </h1>
        </div>
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
          <div className="home_dashboard-lg">
            <img src="/img/main/launch.png" className="updates_img" />
            <div className="home_lg-text">
              <div>
              February 14 Update
              </div>
              <div className="home_lg-textbig">
                Added TypeTool!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
      <div className="section_body">
      <div className="home_title_img">
            <img
              src={"/img/main/logo.png"}
            />
          </div>
        </div>
        <h2 className="section_title">Everything OPS, In One Place</h2>
        <p className="letters_subtitle">
        *We are not affiliated with Objective Personality
        </p>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/learn2.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Learn</h3>
              <p>
                The original Objective Personality theory made simple to navigate.
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
              <h3 className="section_subtitle margin-sm">Type</h3>
              <p>
              Use OPS methods to type yourself and others accurately.
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
              <h3 className="section_subtitle margin-sm">Tools</h3>
              <p>
                Navigate OPS using our easy to use Academy Tools.
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
              <h3 className="section_subtitle margin-sm">Improve</h3>
              <p>
              Turn knowledge into action, based on the ideas of OPS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section extra_margin_section">
      <div className="section_body">
      <div className="home_title_img">
            <img
              src={"/img/main/community.png"}
            />
          </div>
        </div>
        <h2 className="section_title">A Community Project</h2>
        <p className="letters_subtitle">
        Set out to use OPS as it was intended
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
                We focus on how to use OPS for good, to leave an overall positive impact.
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
              Concepts are made simple to understand, true to the core OPS ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section extra_margin_section">
        <h2 className="section_title">New To All This?</h2>
        <ChangeSection link="/learn/start" text="Start Here" src="start" />
      </div>
    </div>
  );
}

export default Home;
