import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Expectations',
  description: 'The very first part of the journey',
  image: '/embed/your_type.png',
  url: '/typing/get_started',
});

function expectations() {
  return (
    <div className="main">
      <Banner
        background="green"
        title="Expectations"
        section="start"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">What to expect</h2>
                <p>
                Determining your type typically takes a lot more than most might at first think. Whether that be the psychology of trying to see yourself accurately, or which methods are used to do so.
                </p>
                <p>
                This course helps you get on your feet and takes you through the typing process, from start to finish.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Have a goal in mind</h2>
                <p>
                When typing yourself, Its important to know with yourself what you actually want out of this.
                Are you ready to find the truth here, even if it might not be what you want it to be?
                </p>
                <p>
                Things such as these are important to figure out with yourself. You gotta know where your target is, otherwise theres nothing to hit.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/your_type/mountain.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/your_type/direction.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Typing is a process</h2>
                <p>
                If you want to do this right, and actually get something useful out of it. Typing is a process. Patience is key.
                </p>
                <p>
                This applies to both the psychology of putting your own biases aside, as well as getting your methodology right. Both of which this course will dive deeper into.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">It's a choice</h2>
                <p>
                Many assume that if you take interest in a particular theory, you must get typed. That's not actually the case
                </p>
                <p>
                As you see, a lot of personality theories serve as excellent ways to map out behavior or traits, regardless of which type you happen to be.
                </p>
                <p>
                While most, you included most likely, want to nail down a type. It's important to remember, that it's far from the only way personality theory is useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default expectations;