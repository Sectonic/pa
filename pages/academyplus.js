import Banner from "../components/banner";
import Link from 'next/link';
import { waitUntil, WAIT_FOREVER } from 'async-wait-until';
import Placeholder from '../components/placeholder';
import {useState, useEffect} from 'react';

function AcademyPlus({user}) {
  const [loading, setLoading] = useState(true);
  const [academyPlus, setAcademyPlus] = useState(false);
  const [customer, setCustomer] = useState(false);
  useEffect(() => {
    async function checkUser() {
      let response = await fetch(`/api/get_customer`, {credentials: 'same-origin'});
      if (response.ok) {
        setCustomer(true);
      }
      await waitUntil(() => user != null, {
        timeout: WAIT_FOREVER,
      });
      setLoading(false);
      setAcademyPlus(user.plus);
    }
    checkUser();
  }, [user]);

  if (loading) {
    return (
      <div className="main">
        <Placeholder/>
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="main">
        <Banner
          background="yellow"
          title="Academy Plus"
          section="support"
          type="nav"
        />
        {academyPlus ? (
          <div className="section blur_background">
            <div className="section_title price-text">You are subscribed to <span className="orange-text">Academy Plus</span></div>
            <p className="letters_subtitle neg-mt-25">
              Click below or "subscription" in your account popup to manage it
            </p>
            <div className="section_body neg-mt-45">
              <form action="/api/customer_portal" method="POST">
                <button type="submit" role="link" className="section_text price_btn">
                  <div>Manange Subscription</div>
                </button>
              </form>
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
                <form action="/api/customer_portal" method="POST">
                  <button type="submit" role="link" className="section_text price_btn">
                    <div>Manange Subscription</div>
                  </button>
                </form>
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
                    {user.active ? (
                      <form action="/api/checkout_session" method="POST">
                        <button type="submit" className="academy_perks-btn academy_perks-btn-purple">Get Plus</button>
                      </form>
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
            {academyPlus ? (
              <button type="button" className="section_text price_btn" style={{'cursor': 'default'}}>
                <div>Already Subscribed</div>
              </button>
            ) : (
              <>
                {user.active ? (
                  <form action="/api/checkout_session" method="POST">
                    <button type="submit" role="link" className="section_text price_btn">
                      <div>Subscribe</div>
                    </button>
                  </form>
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
    );
  }
}

export default AcademyPlus;
