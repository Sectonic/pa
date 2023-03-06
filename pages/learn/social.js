import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Social() {
  return (
    <div className="main">
      <Banner background="yellow" title="Social Hierarchy" section="social" />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Funny title here</h2>
              <p>
              -
              </p>
              <p>
              -
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/your_type/direction.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
