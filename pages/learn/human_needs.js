import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function humanNeeds() {
  return (
    <div className="main">
      <ChangeSection section="human_needs" />
      <Banner background="pink" title="Human Needs" section="human_needs" />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/learn/basic/human_needs/needs.png"}
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">We Have All 4 Needs</h2>
              <p>
                Everyone has all the human needs it's just a matter of which
                order they're in.
              </p>
              <p>
                It's a matter of which ones come BEFORE the other. NOT which
                ones you have or don't have.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Function Charge</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text text-center">
            <div>
              <h3 className="section_subtitle">
                <span className="charge_letter">I</span>ntroverted
              </h3>
              <p>Ignores the spectrum</p>
              <p>Compares to itself</p>
              <p>Perfects, goes layers deep</p>
            </div>
          </div>
          <div className="section_text text-center">
            <div>
              <h3 className="section_subtitle">
                <span className="charge_letter">E</span>xtroverted
              </h3>
              <p>Tracks the spectrum</p>
              <p>Compares to everything</p>
              <p>Shallow, but reaches far</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/learn/basic/human_needs/observer.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2 className="section_title-text-sm">Observer Needs</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20">
          <div className="section_text needs-blue">
            <div className="text-sm_img">
              <img src={"/img/icons/Needs/oi.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Organize</h3>
              <p>
                Narrows down <br />
                Focuses on known <br />
                Is responsible to narrow down before expanding
              </p>
            </div>
          </div>
          <div className="section_text needs-red">
            <div className="text-sm_img">
              <img src={"/img/icons/Needs/oe.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Gather</h3>
              <p>
                Seeks & Gathers New <br />
                Expands <br />
                Is responsible to have it all before narrowing down
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/learn/basic/human_needs/decider.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2 className="section_title-text-sm ">Decider Needs</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20">
          <div className="section_text needs-blue">
            <div className="text-sm_img">
              <img src={"/img/icons/Needs/di.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Self</h3>
              <p>
                Tracks Self <br />
                Personal standards <br />
                Perfects self <br />
                Sees the needs of self before others
              </p>
            </div>
          </div>
          <div className="section_text needs-red">
            <div className="text-sm_img">
              <img src={"/img/icons/Needs/de.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Tribe</h3>
              <p>
                Tracks Others <br />
                Decisions of others <br />
                Sees tribe spectrum <br />
                Sees the needs of others before own
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default humanNeeds;
