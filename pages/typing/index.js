import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Typing() {
  return (
    <div className="main">
      <Banner background="blue" title="Typing" section="typing" type="nav" />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">The Right Way</h2>
              <p>
              Here you can learn the best approaches for typing yourself and others based on scientific methods.
              </p>
              <p>
              These will take you from A to B while making it doable with the right tools. 
              Everything stays true to Objective Personality methodology. No reinventing the wheel required!
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/typing/home/scope.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Typing Guides</h2>
        <p className="letters_subtitle">
        Start here to learn the best way to nail down types for yourself or others
        </p>
        <div className="section_body top_typing">
          <a href="/typing/your_type">
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
          </a>
          <a href="/typing/typing_method">
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
          </a>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Approaches</h2>
        <p className="letters_subtitle">
        Doable methods for nailing down your own type
        </p>
        <div className="section_body top_typing">
          <div className="section_text outline-gray">
            <a href="/typing/triangulation">
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
            </a>
          </div>
          <div className="section_text outline-gray">
            <a href="/typing/typing_teams">
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
            </a>
          </div>
          <div className="section_text outline-gray">
            <a href="/typing/d&s_typing">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typing;
