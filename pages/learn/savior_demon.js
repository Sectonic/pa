import Banner from "../../components/banner";

function SaviorDemon() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="Savior & Demon"
        section="savior_demon"
      />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src={"/img/learn/basic/savior_demon/state.png"}
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
          <div className="multi_paragraph">
              <h2 className="margin-sm">Emotional State</h2>
              <p>
              Savior & Demon states are about tracking emotional state. It has to do with how someone's energy levels respond to a certain cognitive motivation. 
              </p>
              <p>
              What you're looking for is the state change when someone's exhibiting certain traits.
              </p>
          </div>
          <div className="multi_paragraph">
              <h2 className="margin-sm">Trust & Responsibility</h2>
              <p>
              When a trait is in a Savior State, It's cognitively trusted. You'll see a stable and positive emotional response.
              </p>
              <p>
              A trait in a Demon State on the other hand, is not trusted. You'll see a state of uncertainty and an unstable emotional response.
              </p>
              <p>
              These things happen automatically. You won't necessarily notice yourself playing out these reactions to things as you do them, but they happen constantly.
              </p>
          </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Personal Narrative</h2>
              <p>
                Everyone is living out their own version of how the world works. What's good and what's bad.
                This forms a narrative. This is how we all navigate life.
              </p>
              <p>
                The story you're living out causes you to end up in the same places, with the same consequences.
                This way everyone sort of runs along in their own stories.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Saved From Your "Demons"</h2>
              <p>
              A story has good guys and bad guys. The Saviors are the good guys in your story. 
              These are the things you run towards to save you from the pain and fear in your life, your Demons.
              </p>
              <p>
              This is the core narrative you're looking for through someone's life.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/basic/savior_demon/narrative.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
        <div className="section_img">
            <img
              src={"/img/learn/basic/savior_demon/hammer.png"}
              alt=""
            />
          </div>
        <div className="section_text multiple_paragraphs">
          <div className="multi_paragraph">
              <h2 className="margin-sm">Favourite Hammer Analogy</h2>
              <p>
              You can see traits in a Savior State like a favourite hammer. They're your go-to approach for doing things right!
              </p>
              <p>
              All you know how to do is hammer nails in, and you're good at it. It's the best way to go afterall, right?
              </p>
          </div>
          <div className="multi_paragraph">
              <h2 className="margin-sm">Overuse & Negligence</h2>
              <p>
              As you run out of nails, you'll have to deal with a screw. No matter how much you hammer on it, it won't drive it in.
              </p>
              <p>
              This is the essence of what a Savior State is. Absuing a certain approach, and as an equal and opposite consequence not doing something else.
              </p>
              <p>
              Where the Demon State fits into this analogy is the screwdriver. You've never bothered to pick it up, so you don't know how to use it, and don't trust it.
              </p>
          </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">We're All Addicted</h2>
              <p>
              We're all obsessed with our saviors. Look around you, everyone's stuck in their own conviction of what's right.
              </p>
              <p>
              Whether it's your over-controlling grandma or your friend who can't focus to save their life. We're all fighting our own battle by our own rules.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">And... We Can't See It</h2>
              <p>
              Just as everyone else, you're in a savior state all the time too. It's so automatic you don't notice. We make mistakes because we can't see ourselves making them.
              </p>
              <p>
              Everything becomes unhealthy in abundance. That's the deal with saviors, they are our junk food.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/basic/savior_demon/loud.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h1 className="section_title">Savior & Demon States</h1>
        <div className="section_body">
          <img
            src={"/img/icons/Diagrams/saviordemon.png"}
            alt=""
            className="spectrum_img outline-gray"
          />
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Defining Personality</h2>
              <p>
              Everything in OPS rests on top of the concept of Savior & Demon states. They're how you determine personality traits.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Binary Coins</h2>
              <p>
              Coins are how personality traits are categorized. It's a dichotomy between two opposing motivations.
              </p>
              <p>
              Whichever trait is determined as seen in a savior state is selected, and the opposite trait is inherently a demon.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img
              src={"/img/learn/basic/savior_demon/binary_coin.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaviorDemon;
