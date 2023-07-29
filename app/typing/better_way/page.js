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
                Most other systems typically base typings on subjective self reporting. While it appears easier at first glance, it becomes more complicated due to what is lacking: a true perception of yourself.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Personality Tests</h2>
                <p>
                "Fun" personality tests also do not help this case. For example in 16personalities, you get a short test where you answer some arbitrary questions. 
                After that the test pops out a cartoony personality chracter to pat you on the back but it does not truly say anything about you. It is vague and almost anyone can relate to those traits if they wished.
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
                Some systems use tests, some let you type yourself, and others have someone else type you based on your responses.
                </p>
                <p>
                The idea behind a personality system is to properly track personality, and be able to categorize types in relation to each other. If your method is subjective, you are not properly comparing in relation to others. You are only comparing to your own feelings and standards.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Why It's Bad</h2>
                <p>
                  When you look subjectively at how you feel about your personality, your perspective can be extremely skewed. You can be the most extroverted person, but type yourself introverted because you feel lonely and tired at night. You could be the most introverted person, but type yourself extroverted because you feel good around people. 
                </p>
                <p>
                  These answers all go down a path where you're not properly looking at yourself, but instead you are cherry picking what feels right. Understanding the truth to yourself will uncover how you actually act. This cannot be done with a subjective perspective.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Self-Typing</h2>
                <p> There is a reason why your biggest realizations about yourself often come from another person's perspective. It is because, while people do know themselves, they do not know everything. You do not objectively know your behaviors that well compared to the spectrum of people around you.</p>
                <p>
                  If you're choosing your own type in a system, you're still only comparing to only your own perception, in which lies the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">What else?</h2>
                <p>
                  Beyond self typing specifically, most other methods are self-typing in disguise.
                </p>
                <p>
                  We already know that online personality tests cannot gauge who you are well, but what about other methods?
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Subjective Methodology</h2>
                <p>Even things like interviews and questionares can end up falling into subjectivity. This is where it gets tricky. Often when people type others, the questions they ask or the answers they receive will all be based on self assessments.</p>
                <p>"My personality is really x! I belive deeply that I am y. I am soooo z you cannot believe it." Even when trying an approach with other people, it can still end up not being accurate due to self-reporting.</p>
                <p>
                  What happens with most of such typings, is that the typist is not actually interpreting or comparing your actions. Instead they simply convert your opinion into a type. Whether it be an interview, or any form of typing, if a typist is judging your opinions about yourself as they are, we arrive right back at self reporting - with a few sprinkles of intepretation.
                </p>
                <p>How do you beat this?</p>
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
                <p> Instead of using someone's opinion on themselves, you look at their actions, behaviors, and patterns in their life that they reoccuringly get stuck on doing; you look at where they fit on the spectrum; you look at Objectivity.</p>
                <p>
                Instead of running to quick tests or solutions where you get to put yourself in a box. Objective methodology is key.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">If you've come this far</h2>
                <p>
                  Now that you understand why conventional methods are typically pretty lackluster, it's time to talk about what can be done about it. The rest of the course goes in depth with how typing can be done right using simple principles of psychology.
                </p>
                <p>
                  Through objectivity, methodology and understanding the psychology behind typing. 
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