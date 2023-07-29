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
                This is not your average typing guide, as other guides either do not exist, or fail to cover important ground.
                </p>
                <p>
                This is a full fledged crash course on typing within any system. Methodology, psychology and practical solutions are all covered in depth so you can nail down your type like a pro.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">No shortcuts</h2>
                <p>
                Many are simply looking for someone to give them their type, or get a crappy result on a test. You won't find these sorts of shortcuts here.
                </p>
                <p>
                However, what you will find instead, is a clear direction towards determining a type that actually means something real.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/get_started/startup.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/get_started/direction.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Typing is a journey</h2>
                <p>
                If you want to do this right, and actually get something useful out of it. Patience is key, and you have to actually want the truth.
                </p>
                <p>
                This applies to both the psychology of putting your own biases aside, as well as getting your methodology right. Both of which this course will dive deeper into.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">It's a choice</h2>
                <p>
                You might assume, that if you take interest in a particular theory, you must get typed. That's not actually the case
                </p>
                <p>
                As you see, a lot of personality theories serve as excellent ways to map out behavior or traits, regardless of which type you happen to be. It's important to remember, that typing is far from the only way personality theory is useful.
                </p>
                <p>
                However, you're here for a reason: You want to nail down a type. You're damn straight you'll succeed.
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