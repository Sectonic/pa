import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Truth',
  description: 'Understanding how psychology affects typing',
  image: '/embed/your_type.png',
  url: '/typing/psychology',
});

function psychology() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Psychology"
        section="flame"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">The psychology of typing</h2>
                <p>
                The psychology of going through the typing process is a very important, but also a completely overlooked aspect throughout the entire personality space. 
                </p>
                <p>
                However, in this course you will get a thorough rundown of how typing and your state of mind are closely tied together.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">For better or worse</h2>
                <p>
                Your psychology affects your typing, and your typing affects your psychology.
                </p>
                <p>
                This is important to keep in mind. Things such as bias and perception can essentially invalidate your typing.
                </p>
                <p>
                On the other hand, if you go into typing with the wrong mentality, it can overall just be a bad experience.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/confusion.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/obstacles/success.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Better method</h2>
                <p>
                Through understanding, you can use psychology to your advantage. 
                </p>
                <p>
                Certain patterns invalidate your typing by messing up the methodology and skewing your results.
                </p>
                <p>
                Once you are able to identify these patterns, it is easier to deliberately avoid them.
                Through doing this, you end up with a typing that is far more accurate and methodical.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Better Mentality</h2>
                <p>
                The other side is about steering your mindset.
                </p>
                <p>
                If you type yourself for the wrong reasons, such as being insecure for instance. It can result in a downwards spiral.
                </p>
                <p>
                Suddenly, a lot of pressure is put on typing that wasn't meant to be there. As a result, some people may actually get worse as a result of typing, rather than improve. This is what we want to avoid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default psychology;