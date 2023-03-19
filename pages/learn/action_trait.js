import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function actionTrait() {
  return (
    <div className="main">
      <Banner
        background="green"
        title="Actions"
        section="action_trait"
      />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/learn/basic/action_trait/top.png"}
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Actions ≠ Traits</h2>
              <p>
                What's important to realise is that we are not tracking specific
                actions or specific situations.
              </p>
              <p>
                One might act in a certain way, but that does not mean their
                actions are actually traits of their personality as a whole.
              </p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">Ability ≠ Savior & Demon</h3>
              <p>We're NOT tracking how good at something you are</p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">Values ≠ Savior & Demon</h3>
              <p>
                We're NOT tracking how much you like certain traits, it's
                completely irrelevant how much you value or want to do certain
                things when it comes to Saviours & Demons.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Life Patterns</h2>
              <p>
                Saviors & Demons are tracking your life patterns Which traits
                are consistently present in your life, and which are not.
              </p>
              <p>
                When determining Savior & Demon states, you're looking for where
                people run into the same struggles consistently.
              </p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">The Savior & Demon Story</h3>
              <p>
                As you listen to people, and start to see how they as a person
                go through life, you'll start to see a repeating story, a
                narrative.
              </p>
              <p>
                This is where the name Saviors & Demons come from, in that
                story, the Saviors are the path forward, the solutions, while
                the Demons are the dark void they're trying to fix or solve.
              </p>
              <p>
                What you'll see regardless of the situation at hand, is that
                people end up playing out the same narratives, the same fears,
                the same solutions.
              </p>
              <p>That is what Saviors & Demons are about.</p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/basic/action_trait/patterns.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/learn/basic/action_trait/peacock.png"}
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Peacocking & Growth</h2>
              <p>
                People tend to want their demons, which is why a lot of people
                type themselves upside down, and see themselves through their
                demons despite acting out their saviors all day.
              </p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">Peacocking</h3>
              <p>
                People tend to want their demons, peacocking is when someone
                tries to appear as if they're good at their demons, or as if
                they're easy.
              </p>
              <p>
                People don't want to show their flaws, peacocking is a mechanism
                to cover them up. <i>"Look how good I am at this right?"</i>
              </p>
            </div>
            <div className="multi_paragraph">
              <h3 className="margin-sm">Growth</h3>
              <p>
                Where peacocking differs from growth, is that peacocking just
                serves the purpose of showing off, while growth is about putting
                in the actual effort to improve.
              </p>
              <p>
                Some people realize they need to work on their demons to
                improve, this doesn't make them not demons, and doesn't mean
                it's peacocking, it's growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default actionTrait;
