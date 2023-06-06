import Banner from "../../_components/banner";

function Letters() {
  return (
    <div className="main">
      <Banner background="pink" title="Letters" section="ops/home/letters" />
      <div className="section">
        <div className="section_body">
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Means To An End</h2>
              <p>
              Letters are tools to fulfill certain needs. A screw needs a screwdriver and a nail needs a hammer. 
              They all have their time and place. However, there's a catch.
              <b />
              Everyone has a favorite screwdriver they'll use even if they're faced with a nail.
              That is what letters are all about.
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
                src="/img/learn/ops/basic/human_needs/decider.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2 className="img-title_text">Decider Letters</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm typing_method_body">
          <div className="section_text outline-f">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/feeling.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Feeling</h3>
              <p>
                Decides based on values & priorities; <br />
                Is responsible to decide based on emotions and values before
                figuring out what works.
              </p>
            </div>
          </div>
          <div className="section_text outline-t">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/thinking.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Thinking</h3>
              <p>
                Decides based on reasons & what works; <br />
                Is responsible to decide based on what works and what functions
                best, before figuring out emotions.
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
                src="/img/learn/ops/basic/human_needs/observer.png"
                alt=""
              />
            </div>
            <div className="section_title-text">
              <h2 className="img-title_text">Observer Letters</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm typing_method_body">
          <div className="section_text outline-i">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/intuition.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Intuition</h3>
              <p>
                Looks for answers through patterns & connections; <br />
                Is responsible to figure out the abstract connections before
                figuring out what's concretely real.
              </p>
            </div>
          </div>
          <div className="section_text outline-s">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/sensory.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Sensory</h3>
              <p>
                Looks for answers through reality & the concrete; <br />
                Is responsible to figure out what's concretely real before
                figuring out the abstract connections
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Letter Combos</h2>
        <p className="letters_subtitle">How different letters work together</p>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text  outline-combos outline-combos-f_i">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/nf.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">NF</h3>
              <p>
                What's valuable in the abstract world
                <br />
                "Hippie"
              </p>
            </div>
          </div>
          <div className="section_text outline-combos outline-combos-t_s">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/st.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">ST</h3>
              <p>
                Fixing, what works in the real world
                <br />
                "Reporter talk"
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-combos outline-combos-t_i">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/nt.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">NT</h3>
              <p>
                Puzzling, what works in the abstract works <br />
                "Nerdy"
              </p>
            </div>
          </div>
          <div className="section_text outline-combos outline-combos-f_s">
            <div className="text-sm_img">
              <img src={"/img/icons/Letters/sf.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">SF</h3>
              <p>
                What's valuable in the physical world <br />
                "Popularity"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letters;