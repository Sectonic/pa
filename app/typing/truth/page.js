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
                <h2 className="margin-sm">Typing = Truth</h2>
                <p>
                Typing is essentially just searching for the truth in disguise. 
                </p>
                <p>
                No matter which type you are, reality doesn't change.
                Type is just a label to categorize a part of reality. It doesn't change who you are.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Make it a standard</h2>
                <p>
                As you will learn later in this course, there are many ways truth and reality can get bent out of shape, or even completely overlooked.
                </p>
                <p>
                This is why, if you want to type yourself right and get something out of it. You have to commit to truth as a standard. 
                Without truth, typing is just a fake performance that leads nowhere.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/principles/scale.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/principles/data.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Validity</h2>
                <p>
                It is important to be clear headed about the validity of the system you use to type yourself. 
                </p>
                <p>
                Not all systems are created equal. Most personality theories except for Big5 still count as pseudoscience.
                </p>
                <p>
                  Therefore, it is important you can balance the fact that while some aspects of a theory may be true, it does not encompass all of reality as some sort of "universal truth".
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Usefulness</h2>
                <p>
                Personality theory is not so different from psychology. At the end of the day, no one theory or framework explains all of the human mind.
                </p>
                <p>
                There are only the right tools for the job. Theories often track different things, and work best for different purposes. When working with any one of them, this is important to realize.
                </p>
                <p>
                Many fall into the trap of being too hollistic about it. The reason XYZ arbitrary things happened could be explained by every theory in their own ways, but that does not mean it actually makes sense to do so.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Real truth</h2>
                <p>
                Another important aspect to understand, is that your truth and objective truth are different things.
                </p>
                <p>
                While it is important to be aware of what is true to you. When it comes to objective typing, objective truth is the judge.
                </p>
                <p>
                When it comes to a subject as personal as finding your personality type, personal truth can easily overshadow the objective truth.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Attachment</h2>
                <p>
                It is therefore important to balance out your truth and what you expect to be true, with actual reality.
                </p>
                <p>
                It's important not to get too attatched to a certain idea of what is true, because when truth reveals itself, your attatchment will sway you.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/principles/truth.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default truth;