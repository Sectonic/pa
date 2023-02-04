import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";
import Link from 'next/link';

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
        <h2 className="section_title">Learn To Type</h2>
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
      <div className="section typing_section">
        <h2 className="section_title">Typing Approaches</h2>
        <p className="letters_subtitle">
        Doable methods for nailing down your own type
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
