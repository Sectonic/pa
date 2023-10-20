import Banner from "@components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Functions',
  description: 'Fundamental: The combining of needs and letters: the 8 functions',
  image: '/embed/functions.png',
  url: '/ops/functions',
});

function Functions() {
  return (
    <div className="main">
      <Banner background="blue" title="Functions" section="ops/home/functions" />
      <div className="section_container">
        <div className="section section_images-in">
          <div className="section_body">
            <div className="section_img">
              <img src={"/img/learn/ops/basic/functions/top.png"} alt="" />
            </div>
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Needs + Letters = Functions</h2>
                <p>
                  Take the two previous concepts you've learned. The 4 Human
                  Needs, and the 4 Letters, now combine them! Voila, you now haves
                  8 functions!
                </p>
                <p>
                  Think of the letters as tools and ways to go about fulfilling
                  the core human needs.
                </p>
              </div>
              <div className="multi_paragraph functions-example">
                <h3 className="margin-sm">Example</h3>
                <p>De (Tribe) + T (Thinking) = Te</p>
                <img
                  src={"/img/icons/Diagrams/wow_functions.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section functions">
          <h2 className="section_title margin-sm">Decider Functions</h2>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text outline-grey external_link-source">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/ti.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <img
                  src="/img/main/popup.png"
                  className="external_links link_padding-sm"
                />
                <h3 className="section_subtitle margin-sm">Self Reasons</h3>
                <p>
                  "What works for me" <br />
                  Uses Thinking to fulfill the needs of Self
                </p>
              </div>
            </div>
            <div className="section_text outline-grey external_link-source">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/te.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <img
                  src="/img/main/popup.png"
                  className="external_links link_padding-sm"
                />
                <h3 className="section_subtitle margin-sm">Tribe Reasons</h3>
                <p>
                  "What works for everyone" <br />
                  Uses Thinking to fulfill the needs of the Tribe
                </p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/fi.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Self Values</h3>
                <p>
                  "What I value" <br />
                  Uses Feeling to fulfill the needs of Self
                </p>
              </div>
            </div>
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/fe.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Tribe Values</h3>
                <p>
                  "What everyone values" <br />
                  Uses Feeling to fulfill the needs of the Tribe
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section functions extra_margin_section">
          <h2 className="section_title margin-sm">Observer Functions</h2>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/si.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Organizes Sensory</h3>
                <p>
                  "What is the one thing" <br />
                  Uses Sensory to fulfill the need of Organizing
                </p>
              </div>
            </div>
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/se.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Gathers Sensory</h3>
                <p>
                  "What are all the things"
                  <br />
                  Uses Sensory to fulfill the needs of Gathering
                </p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/ni.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Organizes Patterns</h3>
                <p>
                  "What is the one path"
                  <br />
                  Uses Intuition to fulfill the need of Organizing
                </p>
              </div>
            </div>
            <div className="section_text outline-grey">
              <div className="text-sm_img">
                <img src={"/img/icons/Functions/ne.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">Gathers Patterns</h3>
                <p>
                  "What are all the paths"
                  <br />
                  Uses Intuition to fulfill the need of Gathering
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section_images-in extra_margin_section">
          <div className="section_body reverse_body">
            <div className="section_text multiple_paragraphs">
              <div className="multi_paragraph">
                <h2 className="margin-sm">Function Pairs</h2>
                <p>
                  Functions come in pairs, just as human needs and letters come in
                  opposite binaries, when those two are combined into functions
                  you get functions pairs, which are also binary coins.
                </p>
              </div>
              <div className="multi_paragraph">
                <h3 className="margin-sm">You don't have all pairs</h3>
                <p>
                  You have one decider function pair, and one observer function
                  pair. Together these form a stack of 4 functions, which we'll
                  get into after this section.
                </p>
              </div>
            </div>
            <div className="section_img">
              <img src={"/img/learn/ops/basic/functions/pair.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section_title">Observer Pairs</h1>
          <p className="letters_subtitle">The "How"</p>
          <div className="section_body section_texts-sm">
            <div className="section_text text-center pair-axis outline-combos outline-combos-i_s-right">
              <img src={"/img/icons/axes/nise.png"} alt="" />
            </div>
            <div className="section_text text-center pair-axis outline-combos outline-combos-i_s">
              <img src={"/img/icons/axes/sine.png"} alt="" />
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section_title">Decider Pairs</h1>
          <p className="letters_subtitle">The "Why"</p>
          <div className="section_body section_texts-sm">
            <div className="section_text text-center pair-axis outline-combos outline-combos-t_f-right">
              <img src={"/img/icons/axes/tife.png"} alt="" />
            </div>
            <div className="section_text text-center pair-axis outline-combos outline-combos-t_f">
              <img src={"/img/icons/axes/fite.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;