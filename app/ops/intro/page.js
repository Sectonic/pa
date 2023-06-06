import Banner from "../../_components/banner";

function OPS() {
  return (
    <div className="main">
      <Banner background="blue" title="Objective Personality" section="ops/home/intro" />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">What Is OPS?</h2>
              <p>
              The Objective Personality System or "OPS" is a cognitive theory which has been under development by Dave and Shan for upwards of 10 years.
              OPS utilizes the scientific methods to categorize personality.
              </p>
              <p>
              OPS was developed with the aim of making personality objectively trackable through proper methods, as well as rectifying many of the shortcomings found in other theories.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Objectively Trackable</h2>
              <p>
              Where other theories fell short, was having something provable and trackable. MBTI and other theories quit after theorizing and have been studied to be as accurate as a coin flip.
              </p>
              <p>
              This is where OPS differs. Objective Personality is based on years of hypothesizing, testing and adapting based on the results.
              The result of this is a system made up for 512 types where multiple seperate operators can consistently nail down a single type out of 512.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/ops/intro/ops/top.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">OPS vs Alternatives</h2>
        <div className="section_body section_texts-sm section_texts-sm-no-border extra_spacing_texts-sm">
          <div className="section_text savior_outline-nopad">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/intro/ops/objective.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">External Tracking</h3>
              <p>
                OPS tracks type accurately using an objective method which is based on reaching the same results seperately.
              </p>
            </div>
          </div>
          <div className="section_text demon_outline-nopad">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/intro/ops/subjective.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Self Reporting</h3>
              <p>
                Alternatives typically rely on self typing or tests, which are both subjective methods proven unreliable for years.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm section_texts-sm-no-border extra_spacing_texts-sm">
          <div className="section_text savior_outline-nopad">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/intro/ops/512.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">512 Types</h3>
              <p>
                OPS splits the spectrum of personality into 512 types, while keeping it very simple to narrow down.
              </p>
            </div>
          </div>
          <div className="section_text demon_outline-nopad">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/intro/ops/16.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">16 Types</h3>
              <p>
                Alternatives divide personality into 16 different caricature-like types. Inbetween cases slip through the cracks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in extra_margin_section">
        <div className="section_body">
          <div className="section_img">
            <img src={"/img/learn/ops/intro/ops/simplicity.png"} alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Simple Complexity</h2>
              <p>
              Objective Personality has a whole 512 types, and at first glance that may sound overwhelmingly complex.
              </p>
              <p>
              This is where the paradoxical simplicity of OPS comes in:
              Everything is built up of smaller interconnected parts that make it extremely simple to navigate. 
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Binary To Spectrum</h2>
              <p>
                Every part of OPS is structured into 2 option choices known as Binary Coins. A binary coin represents a single aspect of a personality in which one side of the coin is the polar opposite to the other. 
              </p>
              <p>
                By adding more coins, you essentially double the amount of types possible each time. Using this approach, OPS can encompass a large spectrum of 512 personality types through 9 total coins. It's simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OPS;