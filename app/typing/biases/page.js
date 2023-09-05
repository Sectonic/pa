import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Biases',
  description: 'How biases affects typing',
  image: '/embed/your_type.png',
  url: '/typing/biases',
});

function biases() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Biases"
        section="biases"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                -
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                -
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/idea.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/obstacles/confusion.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                -
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                -
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">-</h2>
                <p>
                -
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default biases;