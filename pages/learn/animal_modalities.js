import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function animalModalities() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Animal Modalities"
        section="animal_modalities"
      />
      <div className="section functions">
        <img
          className="quadra_top"
          src="/img/learn/basic/modalities/masc.png"
          alt=""
        />
        <h2 className="section_title">Masculine Animals</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oede.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Play</h3>
              <p>
                Powerful puncher in the outside world <br />
                Has trouble with hints, tramples over subtleties
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oide.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Blast</h3>
              <p>
                Powerful communicator <br />
                Aggressive with the tribe
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oedi.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Consume</h3>
              <p>
                Knows what they want and goes for it
                <br />
                Aggressive about what they take
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oidi.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Sleep</h3>
              <p>
                Strong inner world
                <br />
                Difficult to move or update
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section functions extra_margin_section">
        <img
          className="quadra_top"
          src="/img/learn/basic/modalities/fem.png"
          alt=""
        />
        <h2 className="section_title">Feminine Animals</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oede.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Play</h3>
              <p>
                Easily flows with and is aware of social dynamics
                <br />
                Has trouble with conflict and confrontation
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oide.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Blast</h3>
              <p>
                Good at guiding and showing the way
                <br />
                Has trouble enforcing the way
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oedi.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Consume</h3>
              <p>
                Can easily adjust what direction they want to go
                <br />
                Has trouble being solid on what they want
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img src="/img/icons/Needs/oidi.png" alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Sleep</h3>
              <p>
                Worldview is moveable
                <br />
                Has trouble being solid on their own path
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default animalModalities;
