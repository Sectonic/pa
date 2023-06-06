import Banner from "../../_components/banner";

function Extroversion() {
  return (
    <div className="main">
      <Banner background="green" title="Extroversion" section="ops/home/extroversion" />
      <div className="section">
        <h2 className="section_title">Energy Preference</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/advanced/extroversion/introvert.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Introvert</h3>
              <p>
                Last animal is (P) or (B)
              </p>
              <p>
                Gets charged up by focusing their energy on their internal
                world, Sleep & Consume.
                <div className="margin-sm">
              </div>
                <p>
                When under threat, retreats to their
                internal world. Has to be forced to let it out, does so
                immaturely (Outbursts)
              </p>
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/advanced/extroversion/extrovert.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Extrovert</h3>
              <p>
                Last animal is (S) or (C)
              </p>
              
              <p>
                Gets charged up by focusing their energy on the outside world through
                Play & Blast.
              </p>
              <p>
              When under threat, brings it to the outside
              world. Has to be forced to go inward, and it's immature (Binging)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Energy Distribution</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/advanced/extroversion/ambivert.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Ambivert</h3>
              <p>
                Has CP & BS together.
              </p>
              <p>
              Extroversion & Introversion mix together more. 
              Has extroverted and introverted animals mixed in the stack.
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/learn/ops/advanced/extroversion/omnivert.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Omnivert</h3>
              <p>
                Has BP & CS together.
              </p>
              <p>
                Extroversion & Introversion are more of a switch.
                Introverted and extroverted animals are clustered in the stack.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h1 className="section_title">Spectrum Of Extroversion</h1>
        <div className="section_body">
          <img
            src={"/img/icons/Diagrams/energy_spectrum.png"}
            alt=""
            className="spectrum_img"
          />
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Activation & Energy</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/icons/Needs/di.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Di Activation</h3>
              <p>
                Reclusive & standard oriented
              </p>
              <p>
                Focuses their energy on own standards & self. Recludes away from others if they don't align.
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/icons/Needs/de.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">De Activation</h3>
              <p>
                Outwardly & Result oriented
              </p>
              <p>
                Focuses energy outwards on other people. Seeks results & external validation.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm">
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/icons/Needs/oi.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm extra_spacing_texts-sm">Oi Activation</h3>
              <p>
                Focused, Stabile
              </p>
              <p>
                Stays in their lane, focuses their energy on staying on course in the same direction.
                <div className="margin-sm">
              </div>
              </p>
            </div>
          </div>
          <div className="section_text">
            <div className="text-sm_img">
              <img
                src={"/img/icons/Needs/oe.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Oe Activation</h3>
              <p>
                Scattered & Everywhere
              </p>
              
              <p>
                Focuses their energy on expanding. Scattered and going everywhere at once.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extroversion;