import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Your Type',
  description: 'Understand what it takes to type yourself',
  image: '/embed/your_type.png',
  url: '/typing/your_type',
});

function yourType() {
  return (
    <div className="main">
      <Banner
        background="blue"
        title="Your Type"
        section="guide"
        type="typing"
      />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Let's Nail It</h2>
              <p>
              This guide helps you get on your feet and takes you through the typing process towards nailing down your type accurately.
              </p>
              <p>
              We'll find the right approach that works for you and filter out all the noise so you can nail down that type once and for all.
              While avoiding the common pitfalls that get most stuck.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/your_type/direction.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src="/img/typing/your_type/goal.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Have A Goal</h2>
              <p>
              You can't reach a goal you don't have. Get clear with yourself whether you actually want to get to your real type even if you're gonna dislike it.
              </p>
              <p>
              Set a finish line for yourself, make it a goal to nail down that type.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Type Limbo</h2>
              <p>
                This is the first and most common pitfall people run into trying to type themselves.
                Round and round they go, typing yourself themselves and over, but it never sits quite right.
              </p>
              <p>
              This is what happens without a finish line. It's important to set a goal for yourself.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Avoid Bias</h2>
              <p>
              Eventually you'll run into bias. Finding your type can be a very personal thing, which makes 
              it easy to start attaching yourself to your type.
              </p>
              <p>
              It's important to disconnect yourself from your bias instead of getting swept up in your own idea of who you are.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Over-Analysis</h2>
              <p>
                What can happen if you get way too swept up with type is over-analysis. 
                Constantly contemplating how everything happening has to do with your type
              </p>
              <p>
                This is what you want to avoid. It will get you stuck in a hole. The key here is to distance yourself from your type label.
                Your identity is your responsibility, and type is just a label.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/your_type/hole.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src="/img/typing/your_type/dark.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">It Takes Effort</h2>
              <div className="margin-sm">
              </div>
              <p>
                Typing yourself is difficult, but that's okay.
              </p>
              <p>
                Good things take effort. There can be a lot of obstacles between you and that accurate typing, 
                but the effort you put in will be worth it in the end.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
          <div className="multi_paragraph">
              <h2 className="margin-sm">It's Worth It</h2>
              <div className="margin-sm">
              </div>
              <p>
                Typing yourself is difficult, but that's okay.
              </p>
              <p>
                Good things take effort. There can be a lot of obstacles between you and that accurate typing, 
                but the effort you put in will be worth it in the end.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/your_type/hard.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Don't Pick And Choose</h2>
              <div className="margin-sm">
                <strong>Only ~10% Get It Right</strong>
              </div>
              <p>
                The odds are against you when it comes to guessing your own
                type, with the majority of people seeing most parts of their
                type in reverse.
              </p>
              <p>
                Don't use tests <br />
                Don't type based on your own opinion
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/your_type/pick.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default yourType;