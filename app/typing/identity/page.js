import Banner from "../../_components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Identity',
  description: 'How identity affects typing',
  image: '/embed/your_type.png',
  url: '/typing/perception',
});

function identity() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Identity"
        section="identity"
        type="typing"
      />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Self Discovery</h2>
                <p>
                An undeniable part of determing your personality type, is the motivation that brought you to do so in the first place. 
                </p>
                <p>
                Whether casual or serious, most get into personality theory because they want to understand something about themselves better.
                </p>
                <p>
                Who you are, and how you fit into the outside world. The motivation to answer these questions is how you uncover truths you'd otherwise never find.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">However...</h2>
                <p>
                That same motivation can equally be be what stands between you and actually seeing the truth.
                </p>
                <p>
                It is important to realize, that to a large extent, we see what we are looking for.
                </p>
                <p>
                Therefore, it is not uncommon to feel attatched to the idea of your type, as your type is about your identity and who you are.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src="/img/learn/typing/obstacles/idea.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section section_images-in">
          <div className="section_body reverse_body">
          <div className="section_img">
              <img src="/img/learn/typing/obstacles/confusion.png" alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">"Lost self" fallacy</h2>
                <p>
                A pitfall not all too uncommon is to use type to form some kind of identity for yourself. 
                </p>
                <p>
                Seeking out a type label as a substitute for your own identity is fairly common, but can also be extremely stressful.
                At the end of the day it won't do anything but cover up a void that's still there.
                </p>
                <p>
                If you are too attached to what type you are, objective typing will be a nightmare. As your entire identity is resting on one way of classifying personality.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">Type limbo</h2>
                <p>
                One scenario that may happen in cases like this is called "type limbo".
                </p>
                <p>
                This is when you keep running in circles, constantly unsure of your type and never really getting anywhere.
                </p>
                <p>
                Your attachment to your type is too strong to settle. The result of this being a detrimental downwards spiral of constant uncertainty and stress.
                </p>
              </div>
              <div className="multi_paragraph">
                <h2 className="margin-sm">"My" type</h2>
                <p>
                Another such example is being stuck on your own idea of your type.
                </p>
                <p>
                This happens when you are so attached to your own "truth" of who you are through a certain type, that you can't let go.
                </p>
                <p>
                The attachment in itself comes from the fear of not actually knowing who you are without the label. 
                As a result, you start forming the type and system around yourself, and any opinions that don't align with your own get dismissed.
                </p>
                <p>
                Needless to say, this is also an unhealthy approach.
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
                While typing has to do with uncovering truths about yourself, it's also important to realize it's just a tool. 
                </p>
                <p>
                Your identity is not encapsulated within a type. A type is just a way to categorize few traits you happen to have.
                </p>
                <p>
                (cut)
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
              <img src="/img/learn/typing/obstacles/balance.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default identity;