import Banner from "../components/banner";
import Link from 'next/link';

function AcademyPlus() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="Academy Plus"
        section="support"
        type="nav"
      />
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/academyplus/gain.png"
                alt=""
              />
            </div>
            <div className="section_title-text section_title-desc">
              <h2 className="margin-sm">Gain more with Plus</h2>
              <p>
                Subscribe to Academy Plus to access early content, full capability of our tools, and extra perks & customizability!
              </p>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-45">
          <div className="section_text academy_card">
            <div>
              <h2 className="margin-sm">Academy</h2>
              <div className="academy_perks">
                <div className="academy_perk">
                  <img src="/img/academyplus/database.png"/>
                  <div>Access Full Database</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/main/type_tool.png"/>
                  <div>Basic TypeTool Features</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/main/typing_academy.png"/>
                  <div>Basic Typing Modes</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academy_statistics.png"/>
                  <div>Limited Typing Statistics</div>
                </div>
                <div className="academy_perk-invisible"></div>
                <div className="academy_perk-invisible"></div>
                <div className="academy_perk-invisible"></div>
              </div>
              <button type="button" className="academy_perks-btn academy_perks-btn-gray">Current</button>
            </div>
          </div>
          <div className="section_text academy_card academyplus_card">
            <div>
              <h2 className="margin-sm">Academy <span className="orange-text">Plus</span></h2>
              <div className="academy_perks">
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_database.png"/>
                  <div>Access Full Database</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_tools.png"/>
                  <div>Advanced TypeTool Features</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_typing.png"/>
                  <div>Extra Typing Modes</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_statistics.png"/>
                  <div>Full Typing Statistics</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_early.png"/>
                  <div>Early Access To New Content</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_user.png"/>
                  <div>Customizable User Profile</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_exclusive.png"/>
                  <div>Exclusive Discord Perks</div>
                </div>
              </div>
              <button type="button" className="academy_perks-btn academy_perks-btn-purple">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/academyplus/support.png"
                alt=""
              />
            </div>
            <div className="section_title-text section_title-desc">
              <h2 className="margin-sm">Support Us</h2>
              <p>
                Help us build and maintain our efforts on developing this website with your support. We've spent countless hours perfecting it just for you.
              </p>
            </div>
          </div>
        </div>
        <div className="section_title neg-mt-45 support_title">Our Team</div>
        <div className="section_body neg-mt-45 support_body">
          <div className="section_text support_card outline-gray">
            <div>
              <img src="/img/academyplus/sect.png" />
              <h2>Sujal Dhakal</h2>
            </div>
          </div>
          <div className="section_text support_card outline-gray">
            <div>
              <img src="/img/academyplus/aze.png" />
              <h2>Alex Privalov</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="section blur_background">
        <div className="section_title">Gain more & Support us for<br/><span className="orange-text price-text">$5.99 / Month</span></div>
        <div className="section_body neg-mt-45">
          <div className="section_text price_btn">
            <div>Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyPlus;
