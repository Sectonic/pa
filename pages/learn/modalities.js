import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Modalities() {
  return (
    <div className="main">
      <ChangeSection section="modalities" />
      <Banner background="pink" title="Modalities" section="modalities" />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/learn/basic/modalities/attribute.png"}
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">An Attribute</h2>
              <p>
                Think of Modalities as a modifier, an attribute to functions.
              </p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">Separate from saviors & demons</h3>
              <p>
                Modalities are modifiers to functions, you can have Masculine X
                and Feminine Y. If you have saviour X then you have a masculine
                savior, but the concept itself is not dependent on savior or
                demon states.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section_title">Defining The Terms</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text modalities-masc">
            <div className="text-sm_img">
              <img
                src={"/img/learn/basic/modalities/masc.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="margin-sm">Masculine (M)</h3>
              <div className="margin-sm">
                <strong>Pushy, Certain, Immoveable</strong>
              </div>
              <p>
                Sees things as solid, pushes back Certain, rigid, will fight you
                over it.
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm">
          <div className="section_text modalities-fem">
            <div className="text-sm_img">
              <img
                src={"/img/learn/basic/modalities/fem.png"}
                alt=""
              />
            </div>
            <div className="text-sm_desc">
              <h3 className="margin-sm">Feminine (F)</h3>
              <div className="margin-sm">
                <strong>Flowy, Uncertain, Moveable</strong>
              </div>
              <p>
                Goes with the flow, gets moved easily. Doesn't push back Non
                certain, won't fight you over it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section ">
        <div className="section_body">
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Modalities Type Code</h2>
              <p>
                Shows the modalities of Sensory & De functions REGARDLESS of
                their place in the stack
              </p>
              <div className="modalities_code">
                <h3>MM MF FM FF</h3>
                <div className="modalities_code-boxes">
                  <div>
                    <p className="modality_x">
                      <span>X</span>X
                    </p>
                    <p className="modality_text">Sensory Function</p>
                    <p>(Si or Se)</p>
                  </div>
                  <div>
                    <p className="modality_x">
                      X<span>X</span>
                    </p>
                    <p className="modality_text">De Function</p>
                    <p>(Te or Fe)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/basic/modalities/code.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalities;
