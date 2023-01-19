import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

export default function Typology() {
  return (
    <div className="main">
      <Banner background="yellow" title="Personality Theory" section="typology_intro" />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Why Personality?</h2>
              <p>
              Personality theory is about tracking the reoccuring traits that make you who you are. 
              This isn't some voodoo either, it's actually very down to earth. We won't tell you about how mysterious you are.
              </p>
              <p>
              Personality theory is far more useful than that. 
              Once you go a layer deeper and see people for how they really are, instead of who they want to be, you can't unsee it.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/intro/typology/why.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src={"/img/learn/intro/typology/game.png"} alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
          <div className="multi_paragraph">
              <h2 className="margin-sm">The Game Of Life</h2>
              <p>
              Everyone plays the game of life whether they want to or not. 
              Some days are smooth sailing, while others are a frantic scramble to play the right moves.
              </p>
              <p>
              Personality theory is like learning the rules of the game. 
              Why things happen as they do, and in which order. It's easier to know which cards to draw and how to navigate the game when you know the rules.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
          <div className="multi_paragraph">
              <h2 className="margin-sm">How It Works</h2>
              <p>
              Look at learning personality theory sort of like learning a new language. 
              It puts new vocabulary on things we're all already familliar with.
              </p>
              <p>
              Personality theory maps out things we go through and puts them in neat categories to makes it easy.
              It's a real eye opener being able to see the dynamics at play. Once you see it, you can't unsee it.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/intro/typology/map.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src={"/img/learn/intro/typology/start.png"} alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Get Started</h2>
              <p>
              There are a few different personality theories. Each theory tracks things a bit differently, for better or worse.
              </p>
              <p>
              The most popular theories out there are things like MBTI, which you'll find through sites like 16Personalities. 
              To put it simply, they're a fun party trick. But when it comes to actually tracking anything, they're hot garbage.
              </p>
              <p>
              This brings us onto proper theories like Objective Personality, which puts its main focus on making theory trackable in practice. This will be the theory we dive into.
              </p>
            </div>
          </div>
        </div>
        <ChangeSection link="/learn/ops_intro" text="OPS Intro" src="ops_intro" padding={true} />
      </div>
    </div>
  );
}
