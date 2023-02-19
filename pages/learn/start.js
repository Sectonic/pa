import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";
import Link from "next/link";

function Start() {
  return (
    <div className="main">
      <Banner background="green" title="Start" section="start" />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src={"/img/learn/intro/start/steps.png"} alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">One Step At A Time</h2>
              <p>
              The course is built up so every new concept builds on previous ones. Make sure to understand a topic before moving on.
              </p>
              <p>
              If you skip ahead and try to grasp it all at once, you'll confuse yourself to bits. (You heard it here first!)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section functions">
        <h2 className="section_title margin-sm">Course Overview</h2>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-s">
            <div className="text-sm_img">
              <img src={"/img/learn/home/start.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">First Steps</h3>
              <p>
                The first few steps into personality theory
              </p>
            </div>
          </div>
          <div className="section_text outline-i">
            <div className="text-sm_img">
              <img src={"/img/learn/home/fundamentals.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Fundamentals</h3>
              <p>
              The basic building blocks of Objective Personality
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-f">
            <div className="text-sm_img">
              <img src={"/img/learn/home/letters.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Intermediate</h3>
              <p>
              Concepts that expand on the basics and open up the system
              </p>
            </div>
          </div>
          <div className="section_text outline-t">
            <div className="text-sm_img">
              <img src={"/img/learn/home/advanced.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Advanced</h3>
              <p>
              Concepts that connect different parts of the systems together
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section extra_margin_section">
        <h1 className="section_title">Sections of the Course</h1>
        <div className="section_body">
          <img
            src={"/img/learn/intro/start/overview.png"}
            alt=""
            className="spectrum_img outline-gray"
          />
        </div>
      </div>
      <div className="section transparent_section">
        <ChangeSection link="/learn/typology_intro" text="Typology Intro" src="typology_intro"/>
      </div>
    </div>
  );
}

export default Start;
