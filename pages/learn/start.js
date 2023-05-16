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
            <img src={"/img/learn/typology/start/steps.png"} alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">What's This?</h2>
              <p>
                This is the start of a course on the system of Objective Personality. It is built to teach you concepts and build upon them as you go. Understand the concept before you go to the next concept!
              </p>
              <p>
                If you skip ahead and try to grasp it all at once, you'll confuse yourself to bits. (You heard it here first)
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
              <img src={"/img/learn/ops/home/start.png"} alt="" />
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
              <img src={"/img/learn/ops/home/fundamentals.png"} alt="" />
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
              <img src={"/img/learn/ops/home/letters.png"} alt="" />
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
              <img src={"/img/learn/ops/home/advanced.png"} alt="" />
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
            src={"/img/learn/typology/start/overview.png"}
            alt=""
            className="spectrum_img outline-gray"
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
