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
      <div className="section_body">
      <div className="home_title_img">
            <img
              src={"/img/main/logo.png"}
            />
          </div>
        </div>
        <h2 className="section_title">Everything Need, Right Here.</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/learn.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Learn</h3>
              <p>
                Learn Objective Personality through a straightforward course.
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
              Use doable approaches to type yourself and others accurately.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/main/tools.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Tools</h3>
              <p>
                Navigate OPS using our easy to use Academy Tools.
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
              Using personality type to leave a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">New To All This?</h2>
        <ChangeSection link="/learn/start" text="Start Here" src="start" />
      </div>
    </div>
  );
}

export default Home;
