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
          <h2 className="section_title">Show Support & Get Exclusive Perks!</h2>
        </div>
        <div className="section_body neg-mt-45">
          <div className="section_text academy_card">
            <div>
              <h2 className="margin-sm">Academy</h2>
              <h3 className="margin-sm">Free</h3>
              <div className="academy_perks">
              <div className="academy_perk">
                  <img src="/img/main/learn.png"/>
                  <div>Learning & Resources</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/main/database.png"/>
                  <div>TypeSearch</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/main/tools.png"/>
                  <div>Basic OPS Apps</div>
                </div>
                <div className="academy_perk-invisible"></div>
                <div className="academy_perk-invisible"></div>
                <div className="academy_perk-invisible"></div>
              </div>
              <button type="button" className="academy_perks-btn academy_perks-btn-gray">Default</button>
            </div>
          </div>
          <div className="section_text academy_card academyplus_card">
            <div>
              <h2 className="margin-sm">Academy <span className="orange-text">Plus</span></h2>
              <h3 className="margin-sm">5.99$ / month</h3>
              <div className="academy_perks">
              <div className="academy_perk">
                  <img src="/img/academyplus/learn_plus.png"/>
                  <div>Learning & Resources</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/typesearch_plus.png"/>
                  <div>TypeSearch</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/apps_plus.png"/>
                  <div>Advanced OPS Apps</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_early.png"/>
                  <div>Early Access Content</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/customize_plus.png"/>
                  <div>Customizable Profile</div>
                </div>
                <div className="academy_perk">
                  <img src="/img/academyplus/academyplus_exclusive.png"/>
                  <div>Discord Perks</div>
                </div>
              </div>
              <button type="button" className="academy_perks-btn academy_perks-btn-purple">Get Plus</button>
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
