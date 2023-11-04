import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";
import Alert from "@components/alert";

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
      <Alert prompt='This page is a work in progress' />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Expectation warps reality</h2>
                <p>
                What you are looking for, why you are looking, and the way you are looking all shape what you see in the end. 
                </p>
                <p>
                This is what biases are all about. Being biased is a normal part of life, but when it comes to objectively determining a type, biases get in the way.
                </p>
                <p>
                Essentially all of the fallacies in this course are biases with extra steps, but here we'll take a look at how bias itself works.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm"></h2>
                <p>
                The best way to avoid bias, is to understand how it works.
                </p>
                <p>
                By being able to recognize the different types of biases, you can steer clear of them when going about your typing method.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/shapes.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section_title">Types of Biases</h2>
          <div className="section_body section_texts-sm">
            <div className="section_text">
              <div className="text-sm_img">
                <img
                  src={"/img/learn/ops/advanced/extroversion/introvert.png"}
                  alt=""
                />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Internal Bias</h3>
                <p>
                  Swayed perspective as a result of conviction, personal belief or internal emotional responses.
                  <div className="margin-sm">
                </div>
                </p>
              </div>
            </div>
            <div className="section_text">
              <div className="text-sm_img">
                <img
                  src={"/img/learn/ops/advanced/extroversion/extrovert.png"}
                  alt=""
                />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">External Bias</h3>
                <p>
                  Swayed perspective caused by outside factors such as other people or representation of reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/obstacles/yes.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Confirmation Bias</h2>
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
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Typing is a tool</h2>
                <p>
                While typing has to do with uncovering personal things, it's also important to realize it's just a tool. 
                </p>
                <p>
                Your identity is not encapsulated within a type. A type is just a way to categorize few traits you happen to have, and it is not perfect.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Managing identity</h2>
                <p>
                When typing yourself, it's impossible not to apply things to yourself. Doing so is rather healthy.
                </p>
                <p>
                However, the goal should be to have a healthy balance where you are not attaching your identity to type, while being able to process what it means for your life.
                </p>
                <p>
                If you run into any of these traps around typing and get stuck, the real answers you need may have nothing to do with type at all.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/balance.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default biases;