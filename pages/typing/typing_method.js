import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";
import Link from 'next/link';

function typingMethod() {
  return (
    <div className="main">
      <ChangeSection type="typing" />
      <Banner
        background="green"
        title="Typing Method"
        section="method"
        type="typing"
      />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img section_img-sm">
            <img
              src="/img/typing/typing_method/standard.png"
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Standardized Methods</h2>
              <p>
                Unfortunately, there's currently no scientific standardized
                "correct" step by step procedure to test or type in OPS.
              </p>
            </div>
            <div className="multi_paragraph">
              <p>
                The best way to type is to focus on producing consistent
                results, and adhering to a few principles of objectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/typing/typing_method/principles.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2>Principles Of Objectivity</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20">
          <div className="section_text">
            <div>
              <h3 className="margin-sm">Avoid External Bias</h3>
              <p>
                Avoid hearing anything from anyone about their type before you
                finalize your typing. <br />
                If you do, be aware of the bias
              </p>
            </div>
          </div>
          <div className="section_text">
            <div>
              <h3 className="margin-sm">Avoid Internal Bias</h3>
              <p>
                Be aware of biases, what impressions you get of them, and how
                you might project yourself onto them, be aware, and avoid being
                swayed.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-20">
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Keep Typists Separate</h3>
              <p>Producing the same results separately is key in OPS</p>
              <p>
                When typing as a group, DO NOT discuss your typings with each
                other before everyone has finalized their typings, this
                completely defeats the purpose, and creates external biases for
                everyone in the group.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/typing/typing_method/material.png"
                alt=""
              />
            </div>
            <div className="section_title-text section_title-desc">
              <h2 className="margin-sm">Material</h2>
              <p>
                If the material you have of the person you're typing is biased
                and unclear, the typing won't be good either.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-20">
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Videos</h3>
              <p>
                The preferred way to type someone is through a video of them
                where they answer a few questions. The goal is for them to speak
                naturally, and to capture them with as little outside
                interference as possible.
              </p>
            </div>
          </div>
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Audio Only</h3>
              <p>
                You can use sound recordings, but videos are preferred.
                <br />
                Body language has a lot to say that words won't.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-20 neg-mt-45">
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Interviews</h3>
              <p>
                Interviews are a good to see someone in a fairly natural state.
              </p>
              <p>
                The issue with interviews is that you have external interference
                that might sway how the person behaves. Avoid leading questions!
                <br />
                Therefore it's important to type based on interviews with as
                little interference or structure as possible.
              </p>
            </div>
          </div>
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">DON'T Use:</h3>
              <p>Texts, Performances or planned speeches.</p>
              <p>
                When typing someone, it is ESSENTIAL you type based on their
                natural state, if you don't, they can practically act however
                they want, and you end up typing the projected image instead of
                their actual personality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img
                src="/img/typing/typing_method/process.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2>The Process</h2>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-20">
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">One Coin At a Time</h3>
              <p>
                When typing, determine one coin at a time, the particular order
                isn't important, as long as you're not guessing multiple at
                once.
              </p>
            </div>
          </div>
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Don't Get Stuck On Anecdotes</h3>
              <p>
                Personality is about how they are as a person, not just some
                action they did or didn't do <br /> Don't interpret into
                specifics too hard, focus on their life patterns.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body neg-mt-20 neg-mt-45">
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Know Your Reasons</h3>
              <p>
                Know why you're typing them the way you do, better yet, write
                out why you're typing them the way you do.
              </p>
            </div>
          </div>
          <div className="section_text outline-gray">
            <div>
              <h3 className="margin-sm">Practice & Track Your Accuracy</h3>
              <p>
                Improve your accuracy by taking your typing skills into
                practice. <br />
                Type along with the weekly OPS class, or use Roqb's Type
                Practise Tool, then add your results to a doc to track your
                accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Practice & Track</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray">
            <Link
              href="https://ops-dashboard.herokuapp.com/practice"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div>
                <img
                  src="/img/typing/typing_method/roqb.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Type Practice</h3>
                <p>
                  Practice typing random people <br /> Good tool to improve{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray">
            <Link
              href="https://docs.google.com/spreadsheets/d/18BdZo7w_gRaNKGMY6bpw86YMsGiOZvOqBugKQ2JJgfA/edit#gid=614804140"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div>
                <img
                  src="/img/typing/typing_method/ryan.png"
                  alt=""
                  className="typing_img-home"
                />
                <h3 className="typing_title-h3">Accuracy Doc</h3>
                <p>
                  Track your typing guesses
                  <br />
                  Compare to the offical types
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default typingMethod;
