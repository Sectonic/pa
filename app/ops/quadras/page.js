import Banner from "@components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Quadras',
  description: 'Advanced: Differentiate between the 4 quadras',
  image: '/embed/quadras.png',
  url: '/ops/quadras',
});

function Quadras() {
  return (
    <>
      <Banner background="pink" title="Quadras" section="ops/home/quadras" />
      <div className="section_container">
        <div className="section functions">
          <img
            className="quadra_top"
            src="/img/learn/ops/advanced/quadras/a.png"
            alt=""
          />
          <h2 className="section_title">Alpha Quadra</h2>
          <div className="quadra-axis">
            <img src="/img/icons/axes/tife.png" alt="" />
            <img src="/img/icons/axes/sine.png" alt="" />
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-f_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NF Play</h3>
                <p>Tracks the spectrum of tribe beliefs and purpose</p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-t_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/st.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">ST Sleep</h3>
                <p>
                  Narrows in on tools and reality to nail down what works best for
                  self
                </p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-t_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nt.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NT Consume</h3>
                <p>
                  Tracks the spectrum of abstract to find what works best for self
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-f_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/sf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">SF Blast</h3>
                <p>Directs tribe values and preferences in reality</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section functions extra_margin_section">
          <img
            className="quadra_top"
            src="/img/learn/ops/advanced/quadras/b.png"
            alt=""
          />
          <h2 className="section_title">Beta Quadra</h2>
          <div className="quadra-axis">
            <img src="/img/icons/axes/tife.png" alt="" />
            <img src="/img/icons/axes/nise.png" alt="" />
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-f_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NF Blast</h3>
                <p>Directs tribe values and beliefs in the abstract</p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-t_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/st.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">ST Consume</h3>
                <p>
                  Tracks the spectrum of reality to find what works best for self
                </p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-t_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nt.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NT Sleep</h3>
                <p>
                  Narrows in on abstract concepts to nail down what works best for
                  self
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-f_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/sf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">SF Play</h3>
                <p>
                  Tracks the spectrum of what's valuable to the tribe in reality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section functions extra_margin_section">
          <img
            className="quadra_top"
            src="/img/learn/ops/advanced/quadras/d.png"
            alt=""
          />
          <h2 className="section_title">Delta Quadra</h2>
          <div className="quadra-axis">
            <img src="/img/icons/axes/fite.png" alt="" />
            <img src="/img/icons/axes/sine.png" alt="" />
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-f_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NF Consume</h3>
                <p>
                  Tracks the spectrum of abstract concepts and beliefs to find
                  what's valuable to self
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-t_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/st.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">ST Blast</h3>
                <p>Directs based on what works for the tribe in reality</p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-t_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nt.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NT Play</h3>
                <p>
                  Tracks the spectrum of what concepts patterns work for the tribe
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-f_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/sf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">SF Sleep</h3>
                <p>
                  Narrows in on things in reality to nail down what's most
                  valuable to self
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section functions extra_margin_section">
          <img
            className="quadra_top"
            src="/img/learn/ops/advanced/quadras/g.png"
            alt=""
          />
          <h2 className="section_title">Gamma Quadra</h2>
          <div className="quadra-axis">
            <img src="/img/icons/axes/fite.png" alt="" />
            <img src="/img/icons/axes/nise.png" alt="" />
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-f_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NF Sleep</h3>
                <p>
                  Narrows in on an abstract path and beliefs to nail down what's
                  most valuable to self
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-t_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/st.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">ST Play</h3>
                <p>
                  Tracks the spectrum of reality and what things work for the
                  tribe
                </p>
              </div>
            </div>
          </div>
          <div className="section_body section_texts-sm extra_spacing_texts-sm">
            <div className="section_text  outline-combos outline-combos-t_i">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/nt.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">NT Blast</h3>
                <p>
                  Directs based on which abstract path works best for the tribe
                </p>
              </div>
            </div>
            <div className="section_text outline-combos outline-combos-f_s">
              <div className="text-sm_img">
                <img src={"/img/icons/Letters/sf.png"} alt="" />
              </div>
              <div className="text-sm_desc">
                <h3 className="section_subtitle margin-sm">SF Consume</h3>
                <p>
                  Tracks the spectrum of stuff in reality To find what's valuable
                  to self
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quadras;