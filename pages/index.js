import { TypeAnimation } from 'react-type-animation';
import ChangeSection from '../components/change_section';

function Home() {
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
      </div>
      <div className="home_dashboard">
        <div className="home_dashboard-sm">
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
        <div className="home_dashboard-sm negml-10">
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
          <div className="home-text_date">Feb 1</div>
          <img src="/img/main/launch.png" className="updates_img" />
          <div className="home_lg-text">
            <div>
              Personality Academy
            </div>
            <div className="home_lg-textbig">
              Project Launched!
            </div>
          </div>
        </div>
      </div>
      <div className="section_home section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/main/mission.png"}
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Our Mission</h2>
              <p>
               Personality Academy is a community project dedicated to making the use of 
               personality theory doable & useful through Objective Personality.
              </p>
              <p>
              We are not affiliated with Objective Personality or its creators.
              However, we base base our information on them and their core principles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Everything You'll Need, Right Here.</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/learn_icon.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Learn</h3>
              <p>
                Learn Objective Personality through a well-crafted straightforward course.
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/typing.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type</h3>
              <p>
              Learn the typing method. Use doable approaches to type yourself and others accurately.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/resources.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Tools</h3>
              <p>
                We provide you with the best tools available. No need to reinvent the wheel.
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/improve.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Improve</h3>
              <p>
              Turn knowledge into action. Using personality type to leave a positive impact.
              </p>
            </div>
          </div>
        </div>
        <h2 className="section_title">Get Started</h2>
        <span id="home_change"><ChangeSection link="/learn/start" text="Start Learning OPS" src="start" /></span>
      </div>
    </div>
  );
}

export default Home;
