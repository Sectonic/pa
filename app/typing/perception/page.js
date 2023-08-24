import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Identity',
  description: 'Understanding the limits of perception',
  image: '/embed/your_type.png',
  url: '/typing/perception',
});

function perception() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Perception"
        section="perception"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Perception is limited</h2>
                <p>
                The first thing to understand, is that perception is a very malleable and limited. 
                </p>
                <p>
                You are seeing a small bit of the reality through a keyhole. From what you see, your mind fills in all the blanks based on what is expected.
                </p>
                <p>
                This basic concept has been extensively studied throughout time, and is accepted as a fact within the field of psychology.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">The paradox</h2>
                <p>
                It's fairly simple. You can't see, what you can't see.
                </p>
                <p>
                When it comes to personality theories, a big aspect is identifying where you make mistakes. However, you don't make mistakes because you know you're making them.
                </p>
                <p>
                You make the mistakes you do, because you don't see yourself making them.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/keyhole.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/obstacles/point.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Conviction</h2>
                <p>
                Despite our limited and warped perception of reality, we still come pre-programmed with certainty. 
                </p>
                <p>
                You are generally certain of what you see, feel and perceive. If you weren't, you would slowly lose your mind.
                </p>
                <p>
                The result is that at times, you can be very confidently sure about things that aren't actually true
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Balance</h2>
                <p>
                Certainty is important too.
                </p>
                <p>
                At the end of the day, neither overconfidence nor distrust in everything will get you anywhere.
                </p>
                <p>
                You have to strike a balance where you are able to put your own perception aside, as well as being able to trust it when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Method</h2>
                <p>
                When it comes to typing. Perception is an important element to be aware of. 
                </p>
                <p>
                As you are trying to determine your own type, perception is bound to get in the way.
                </p>
                <p>
                This is where it's important to be able to put aside your perception. No matter how convinced you may feel, proper method doesn't lie for finding the truth.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Collective perception</h2>
                <p>
                At the end of the day, we're all seeing our own little bit of reality.
                </p>
                <p>
                However, as you start tracking certain bits of reality from multiple points of view, it becomes something everyone is able to see.
                </p>
                <p>
                That is when you start moving towards objectivity and determining a real type.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/method.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default perception;