import Banner from "../components/banner";
import Link from 'next/link';

function AcademyPlus() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="Academy Plus"
        section="support"
        type="nav"
      />
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
              <h2 className="margin-sm">Gain more with Plus</h2>
              <p>
                Subscribe to Academy Plus to access early content, full capability of our tools, and extra perks and customizability!
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AcademyPlus;
