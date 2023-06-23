import Banner from '@components/banner';
import Link from 'next/link';
import { getCustomer } from '@lib/customer';
import { createMetaData } from "@lib/metadata";
import { CheckoutBtn } from './checkoutBtn';
import { PortalBtn } from './portalBtn';

export const metadata = createMetaData({
  title: 'Academy Plus',
  description: 'Support Personality Academy and get extra perks',
  image: '/embed/support.png',
  url: '/academyplus',
});

export default async function AcademyPlus() {

    const  { academyPlus, customer, active } = await getCustomer();

    return (
      <div className="main">
        <Banner
          background="yellow"
          title="Academy Plus"
          section="support"
          type="nav"
        >
          This is a description for the banner of academy plus. Its a pretty cool thing obviously. You like, get shit and stuff.
        </Banner>
        <div className="section_container">
          {academyPlus ? (
            <div className="section blur_background">
              <div className="section_title price-text">You are subscribed to <span className="orange-text">Academy Plus</span></div>
              <p className="letters_subtitle neg-mt-25">
                Click below or "subscription" in your account popup to manage it
              </p>
              <div className="section_body neg-mt-45">
                <PortalBtn />
              </div>
            </div>
          ) : (
            <>
            {customer && (
              <div className="section blur_background">
                <div className="section_title price-text">You previously subscribed to <span className="orange-text">Academy Plus</span></div>
                <p className="letters_subtitle neg-mt-25">
                  Want to activate it again? Click below to manage it
                </p>
                <div className="section_body neg-mt-45">
                <PortalBtn />
                </div>
              </div>
            )}
            </>
          )}
          <div className="section">
          <div className="section_body">
        <div className="section_img">
              <img
                src={"/img/academyplus/one.png"}
              />
            </div>
          </div>
          <h2 className="section_title neg-mt-45">Get Access to The Best</h2>
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
                      <div>Limited OPS Apps</div>
                    </div>
                    <div className="academy_perk-invisible"></div>
                    <div className="academy_perk-invisible"></div>
                    <div className="academy_perk-invisible"></div>
                  </div>
                  {!academyPlus && <button type="button" className="academy_perks-btn academy_perks-btn-gray">Current</button> }
                </div>
              </div>
              <div className="section_text academy_card academyplus_card">
                <div>
                  <h2 className="margin-sm">Academy <span className="orange-text">Plus</span></h2>
                  <h3 className="margin-sm">9$ / month</h3>
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
                      <div>Extended OPS Apps</div>
                    </div>
                    <div className="academy_perk">
                      <img src="/img/academyplus/academyplus_early.png"/>
                      <div>Exclusive Early Access Content</div>
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
                  {academyPlus ? (
                    <button type="button" className="academy_perks-btn academy_perks-btn-purple" style={{'cursor': 'default'}}>Subscribed</button> 
                  ) : (
                    <>
                      {active ? (
                        <CheckoutBtn className="academy_perks-btn academy_perks-btn-purple">Get Plus</CheckoutBtn>
                      ) : (
                        <Link href='/register'>
                          <button type="button" className="academy_perks-btn academy_perks-btn-purple">Get Plus</button>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="section blur_background">
            <div className="section_title">What you get with Plus</div>
            <div className="section_body">
            <div className="section_img">
              <img
                src={"/img/academyplus/apps.png"}
                alt=""
              />
            </div>
            <div className="section_img">
              <img
                src={"/img/academyplus/early.png"}
                alt=""
              />
            </div>
            </div>
            <div className="section_body">
            <div className="section_img">
              <img
                src={"/img/academyplus/typechart.png"}
                alt=""
              />
            </div>
            <div className="section_img">
              <img
                src={"/img/academyplus/typing.png"}
                alt=""
              />
            </div>
            <div className="section_img">
              <img
                src={"/img/academyplus/customize.png"}
                alt=""
              />
            </div>
            </div>
            <div className="section_title">And always more in the works...</div>
          </div>
          <div className="section extra_margin_section">
        <div className="section_body">
        <div className="section_img">
              <img
                src={"/img/academyplus/support.png"}
              />
            </div>
          </div>
          <h2 className="section_title neg-mt-45">Help us keep it running</h2>
          <p className="letters_subtitle">
          All these things cost a lot of money to keep running over time,
          <br/> By buying Plus you make us able to keep doing more of what we do.
          <br/>If you like what we do, the support would mean the world to us, genuinely. 
          </p>
          <div className="section_title support_title">Our Team</div>
            <div className="section_body neg-mt-45 support_body">
              <div className="section_text support_card outline-gray">
                <div>
                  <img src="/img/academyplus/sect.png" />
                  <h2>Sujal D</h2>
                </div>
              </div>
              <div className="section_text support_card outline-gray">
                <div>
                  <img src="/img/academyplus/aze.png" />
                  <h2>Alex C</h2>
                </div>
              </div>
            </div>
        </div>
          <div className="section blur_background">
            <div className="section_title">Gain more & Support us for<br/><span className="orange-text price-text">$9 / Month</span></div>
            <div className="section_body neg-mt-45">
              {academyPlus ? (
                <button type="button" className="section_text price_btn" style={{'cursor': 'default'}}>
                  <div>Already Subscribed</div>
                </button>
              ) : (
                <>
                  {active ? (
                    <CheckoutBtn className="section_text price_btn">Subscribe</CheckoutBtn>
                  ) : ( 
                    <Link href="/register">
                      <button type="button" className="section_text price_btn">
                        <div>Subscribe</div>
                      </button>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}