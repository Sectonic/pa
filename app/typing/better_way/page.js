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
                <h2 className="margin-sm">Issues with conventional typing</h2>
                <p>
                To understand how typing can be done better. We must see what is wrong with conventional typing in most other personality systems.
                </p>
                <p>
                Most other systems typically base typings on subjective self reporting. While it appears easier at first glance, it becomes more complicated due to what is lacking.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Cheap garbage</h2>
                <p>
                Another quick point to touch on is "fun" personality tests. Take 16Personalities for example. You get a short test where you answer some arbitrary questions. 
                After that the test pops out a cartoony personality chracter to pat you on the back. It's pretty fun, but also useless.
                </p>
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
                <h2 className="margin-sm">Self Reporting</h2>
                <p>
                The main flaw with typing out there is self reporting. At the end of the day, nearly all the common methods lead right back to subjectively picking and choosing your type.
                </p>
                <p>
                Some systems use tests, some let you type yourself and others have someone else type you based on your responses.
                </p>
                <p>
                The idea behind a personality system is to properly track personality, and be able to categorize types in relation to each other. If your method is subjective, you are not properly comparing in relation to others. You are only comparing to your own perspective of others.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Self-Typing</h2>
                <p>
                Some may think they know themselves best, and while that is true. You do not objectively know yourself best compared to the spectrum of personality. 
                </p>
                <p>
                If you're choosing your own type in a system, you're still only comparing to your own perception, in which lies the issue: Subjectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Subjective Method</h2>
                <p>
                Beyond self typing being subjective, most other methods are self-typing in disguise.
                </p>
                <p>
                When being tested or typed, if it always circles back around to your own opinion of yourself, the result will always be rooted in subjectivity.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Tests</h2>
                <p>
                Most self assessment tests are essentially just an extra layer. You compare yourself to the questions being asked, and the test essentially converts your self-perspective into a type.
                This leads us right back to subjective method. You are the one choosing the answers.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Getting typed</h2>
                <p>
                This is where it gets tricky. Often times people will type others, while making one huge mistake: the typing is based on a self assessment questionaire.
                </p>
                <p>
                Whether it be an interview, or over text. If a typist is judging your opinions about yourself as they are. We arrive right back at self reporting, with a few sprinkles of intepretation.
                </p>
                <p>
                What happens with most of such typings, is that the typist is not actually interpreting or comparing your actions. Instead they simply convert your opinion into a type.
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
                <h2 className="margin-sm">Setting new standards</h2>
                <p>
                Now that you understand why conventional methods are typically pretty lackluster, it's time to talk about what can be done about it.
                </p>
                <p>
                Instead of running to quick tests or solutions where you get to put yourself in a box. Objectivity and method is key.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">If you've come this far</h2>
                <p>
                The rest of the course goes in depth with how typing can be done right using simple principles of psychology.
                </p>
                <p>
                Through objectivity, methodology and understanding of the psychology behind typing. 
                It's possible to nail down a type that actually means something, and has validity.
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