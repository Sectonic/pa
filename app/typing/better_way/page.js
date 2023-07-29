import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'A Better Way',
  description: 'The problems with conventional typing',
  image: '/embed/your_type.png',
  url: '/typing/better_way',
});

function betterWay() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="A Better Way"
        section="ribbon"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">The problem</h2>
                <p>
                To understand how typing can be done better. We must see what is wrong with conventional typing as seen in most other personality systems.
                </p>
                <p>
                Most other systems typically type based on self-typing, which is inherently flawed as it is limited to your self perception.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Lack of method</h2>
                <p>
                Another common theme within most common use of personality theory is the complete lack of method.
                </p>
                <p>No focus whatsoever on typing through objective and scientifically based validation. Just claims, tests and self assignment of types.</p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/get_started/fail.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/get_started/communications.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Subjectivity</h2>
                <p>
                When it comes down to it, most common typing practices fail because they're rooted in subjectivity.
                </p>
                <p>
                The point of a personality system is to be able to categorize types and traits in relation to each other. If this is done subjectively, then it is all based on your own intepretation of the system and yourself.
                </p>
                <p>
                While it may add up to yourself, it effectively makes the theory useless outside your head. Two different people can be the same type, for completely different reasons. That is the problem with subjectivity and self reporting.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Personality Tests</h2>
                <p>
                  Where it gets interesting is that subjectivity is found everywhere. Not just in systems where you self-assign a type. 
                </p>
                <p>
                  Personality tests typically end up being self-typing in disguise. A test will typically ask you about how you see yourself, which then directly leads to a type. 
                  This is as much self typing as simply picking a type, just with an extra layer.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Typists as a proxy</h2>
                <p> 
                Where many end up unknowingly typing themselves, is ironically seeking to be typed by someone else.
                </p>
                <p>
                  What typically ends up happening is that the typist will use a questionnaire or interview questions that revolve around your own perception of yourself.
                </p>
                <p>
                  For instance, a typist may ask "Do you prefer the abstract or practical solutions". This type of question is essentially just your own opinion. 
                  The typist simply convertes the responses into a type. Yet again, it is self-typing with extra steps
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Psychology</h2>
                <p>
                  So, why is subjectivity and self perception so bad? I know myself best!
                </p>
                <p>
                  While it is true, you know yourself best from your own point of view. The science does not lie about objective reality. 
                </p>
                <p>
                  Psychology has time and time proven that self perception is just not an accurate method. You don't see what you aren't seeing.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Confusion</h2>
                <p>
                A common but unfortunate fallout of the subjective method is type confusion. It all circles back to your own perception. What if that perception is unstable?
                </p>
                <p>
                Then you end up in type limbo. Many get stuck here, going round and round, can't seem to figure out what type they actually are. Some even get so emotionally invested that it becomes stressful.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/get_started/squiggle.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/get_started/better.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Doing it better</h2>
                <p> Now that you understand what is wrong with conventional methods, it becomes easier to do it right.</p>
                <p>
                Instead of running to quick tests or self perception. The key to typing yourself accurately is through the objective method and mastery of the psychology behind type.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">If you've come this far</h2>
                <p>
                  The rest of this course dives deep into methodology, psychology and practical approaches.
                </p>
                <p>
                  Through understanding these, you can turn knowledge into action. This is how real typing is meant to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default betterWay;