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
                <h2 className="margin-sm">Finding truth</h2>
                <p>
                At the end of the day, typing is about determining what is true. No matter what type you are.
                Reality is still what it is, and the label doesn't change you.
                </p>
                <p>
                Typing is essentially just searching for the truth in disguise.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Make it a standard</h2>
                <p>
                As you will learn later in this course, there are many ways truth and reality can get bent out of shape, or completely looked past.
                </p>
                <p>
                This is why, right out the gate. If you want to type yourself right and get something out of it. You have to commit to truth as a standard.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/principles/scale.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default truth;