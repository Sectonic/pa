import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Truth',
  description: 'Uncovering the truth is the essence of typing',
  image: '/embed/your_type.png',
  url: '/typing/truth',
});

function truth() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="Truth"
        section="shield"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                This is not your average typing guide, as other guides either do not exist, or fail to cover important ground.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/get_started/startup.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default truth;