import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";
import Link from 'next/link';

function Typing() {
  return (
    <div className="main">
      <Banner background="blue" title="Typing" section="typing" type="nav" />
      <div className="section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/typing/home/goal.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">A to B, Track Personality Type</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/learn/advanced/extroversion/introvert.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Learn the Method</h3>
              <p>
                Learn how to go through typing yourself & how to type others accurately.
              </p>
            </div>
          </div>
          <div className="section_text outline-trans">
            <div className="text-sm_img home-top_img">
              <img
                src={"/img/typing/home/approach.png"}
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Pick an Approach</h3>
              <p>
              Turn knowledge into action and start tracking your type objectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section typing_section extra_margin_section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/typing/home/target.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Learn the Method</h2>
        <p className="letters_subtitle">
        Start to finish guides on how to type yourself & others
        </p>
        <div className="section_body top_typing">
          <Link href="/typing/your_type">
            <div className="section_text outline-gray">
              <div>
                <img
                  src="/img/typing/home/guide.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Your Type</h3>
                <p>Accurately type yourself</p>
              </div>
            </div>
          </Link>
          <Link href="/typing/typing_method">
            <div className="section_text outline-gray">
              <div>
                <img
                  src="/img/typing/home/method.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Typing Others</h3>
                <p>Accurately type others</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="section typing_section extra_margin_section">
      <div className="section_body">
      <div className="section_img">
            <img
              src={"/img/typing/home/tool.png"}
            />
          </div>
        </div>
        <h2 className="section_title neg-mt-45">Pick an Approach</h2>
        <p className="letters_subtitle">
        The best doable approaches to objectively track your type.
        </p>
        <div className="section_body top_typing">
          <div className="section_text outline-gray">
            <Link href="/typing/triangulation">
              <div>
                <img
                  src="/img/typing/home/triangulation.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Triangulation</h3>
                <p>
                Track data and draw conclusions
                </p>
                <div className="typing_rec">Accurate & Free</div>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray">
            <Link href="/typing/typing_teams">
              <div>
                <img
                  src="/img/typing/home/teams.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Typing Teams</h3>
                <p>
                Get typed by experienced typists
                </p>
                <div className="typing_rec">Easy & Free</div>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray">
            <Link href="/typing/d&s_typing">
              <div>
                <img
                  src="/img/typing/home/d&s.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">D&S Typing</h3>
                <p>
                  Get officially typed by D&S
                </p>
                <div className="typing_rec">Expensive</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typing;
