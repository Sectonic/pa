import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Animals() {
  return (
    <div className="main">
      <Banner background="pink" title="Animals" section="animals" />
      <div className="section section_images-in-sm">
        <h1 className="section_title">Animals Are 2 Needs</h1>
        <div className="section_body">
          <div className="section_img section_img-sm">
            <img src={"/img/learn/basic/animals/top.png"} alt="" />
          </div>
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Working Together</h2>
              <p>
                An animal consists of 1 observer and 1 decider
                <br />
                Where the "animal" comes in, is that these two functions work
                together.
              </p>
              <p>
                This adds an extra level of depth to how types actually go about
                fulfilling their needs.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body reverse_body">
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Energy</h2>
              <p>
                You can see the human needs and functions as the basic building
                blocks that make up how someone deals with the world, but
                animals are more so the resulting drive and energy you get from
                people when they use those functions.
              </p>
              <p>
                Animals paint a much clearer picture of how people act than
                functions do by themselves.
              </p>
            </div>
          </div>
          <div className="section_img section_img-sm">
            <img src={"/img/learn/basic/animals/energy.png"} alt="" />
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title margin-sm">Energy Animals</h2>
        <div className="section_body section_text-cards">
          <div className="section_text outline-gray animals-blue">
            <div className="text-sm_img extra_margin-letters">
              <img src={"/img/icons/Needs/oidi.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Sleep</h2>
              <div className="margin-sm">
                <strong>Preserves energy for self</strong>
              </div>
              <p>
                Focusing on own needs and known info <br />
                Processing, narrowing in on things for self; <br />
                Same stories about self
              </p>
            </div>
          </div>
          <div className="section_text outline-gray animals-red">
            <div className="text-sm_img extra_margin-letters">
              <img src={"/img/icons/Needs/oede.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Play </h2>
              <div className="margin-sm">
                <strong>Expends energy for tribe</strong>
              </div>
              <p>
                Learning with others, back and forth <br />
                Spectrum of new in relation to others; <br />
                Channel changing stories about others
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20 mobile-mt-20">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/basic/animals/energy.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Energy Dom</h2>
              <div className="margin-sm"></div>
              <p>
                (C) or (B) last
              </p>
              <p>
                Balances input and output of energy.
                Is unbalanced on input & output of info
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Info Animals</h2>
        <div className="section_body section_text-cards">
          <div className="section_text outline-gray outline-combos outline-combos-e_i">
            <div className="text-sm_img extra_margin-letters">
              <img src={"/img/icons/Needs/oedi.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Consume</h2>
              <div className="margin-sm">
                <strong>Takes in for self</strong>
              </div>
              <p>
                Input of gathered info for self <br />
                Expanding and discovering new; <br />
                Channel changing stories about self
              </p>
            </div>
          </div>
          <div className="section_text outline-gray outline-combos outline-combos-e_i-right">
            <div className="text-sm_img extra_margin-letters">
              <img src={"/img/icons/Needs/oide.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Blast</h2>
              <div className="margin-sm">
                <strong>Directs Tribe</strong>
              </div>
              <p>
                Output of organized info for others <br />
                Reducing and narrowing down; <br />
                Same stories about others
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20 mobile-mt-20">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/basic/animals/light.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h2 className="section_subtitle margin-sm">Info Dom</h2>
              <div className="margin-sm"></div>
              <p>
                (S) or (P) last
              </p>
              <p>
                Balances input and output of information.
                Is unbalanced on input & output of energy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section transparent_section">
        <ChangeSection link="/learn/modalities" text="Modalities" src="modalities"/>
      </div>
    </div>
  );
}

export default Animals;
