import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Social() {
  return (
    <div className="main">
      <Banner background="yellow" title="Social Hierarchy" section="social" />
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Social Roles & Survival</h2>
              <p>
              Humans evolved to group together as tribes. The inherent need for each other is what kept us together and alive. 
              That is how social hierarchies formed. People are motivated to fulfill their own roles as part of a larger structure.
              </p>
              <p>
              What we'll be taking a look at here has nothing to do with certain people being "Better" than others. It purely has to do with what kind of spot in the group you insinctively fit yourself into.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/learn/advanced/social/people.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
        <div className="section_img">
            <img src="/img/learn/basic/savior_demon/savior.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Savior State Pull</h2>
              <p>
              What's being tracked here is which position in the tribe you're instinctively taking. Not what you value or find socially appealing.
              </p>
              <p>
              There's a best life and success out there for every type. Being one type does not make you better than any other, it's just a matter of which role you naturally function in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section functions">
      <div className="section_body reverse_body">
          <div className="section_img">
            <img src="/img/learn/advanced/social/motivations.png" alt="" />
          </div>
        </div>
        <h2 className="section_title">The 4 Social Motivations</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text section_column-title">
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/ego.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Ego</h3>
              <p>
                Superiority, competition, being the best. Steps on others to climb up.
              </p>
              <p>
                (Di Motivated, I'm moving up)
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/friends.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Friends</h3>
              <p>
                Even playing field, we're all here to vibe, doesn't climb to be the best.
              </p>
              <p>
              (De Motivated, we're all equal)
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/responsible.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Responsible</h3>
              <p>
              Ownership, expansion, opportunities, responsible for impact on the social structure.
              </p>
              <p>
              (Oe Motivated, Expansive Impact)
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/specialized.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Specialize</h3>
              <p>
              Specialized in one area, responsible for their own corner of the social structure.
              </p>
              <p>
              (Oi Motivated, Narrowed Focus)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
        <div className="section_img">
            <img src="/img/learn/advanced/social/ego.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Ego / Prestige</h2>
              <p>
              "Ego" is the motivation to push yourself upwards, to better yourself in the hierarchy compared to others. 
              </p>
              <p>
              Savior "ego" will focus on coming out on top, putting themselves above others, even if it means stepping on others to climb.
              </p>
              <p>
              "Ego" is slightly Di motivated as it puts itself above others in the social structure and aims for the top, as opposed to equalizing and leveling the playing field with others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Friends / Equalizing</h2>
              <p>
              (Friends) is the motivation to equalize and "vibe with others". To share the same social standing. 
              </p>
              <p>
              Savior (Friends) will either move others up, or move themselves down to keep things level, rather than climbing up to a higher social status.
              </p>
              <p>
             (Friends) is slightly De motivated as it puts others above itself in the social structure and is motivated to equalize and push itself downwards.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/learn/advanced/social/friends.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
        <div className="section_img">
            <img src="/img/learn/advanced/social/responsible.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Responsibility / Expansive</h2>
              <p>
              (Responsibility) has to do with taking responsibility for opportunities in the social structure, stepping up to take ownership for results.
              </p>
              <p>
              Savior (Responsibility) will expand and take social opportunities to climb rather than narrowing in and specializing within their own corner.
              </p>
              <p>
              (Responsibility) is slightly Oe motivated, as it's expanding and being responsible to take on new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Specialize / Confined</h2>
              <p>
              (Specialization) being the opposite of (Responsibility) is motivated to carve our their own corner of the social structure and be the go-to specialist there. 
              </p>
              <p>
              Savior (Specialize) will narrow in and make sure they're competent in their own corner rather than expanding to take the ownership of impacting the social structure.
              </p>
              <p>
              (Specialize) is slightly Oi motivated, as it narrows down and specializes in a specific spot in the social str
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/learn/advanced/social/specialized.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_img">
            <img src="/img/learn/advanced/social/pyramid.png" alt="" />
          </div>
        </div>
        <h2 className="section_title">The 4 Social Types</h2>
        <div className="section functions">
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/1.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type 1 - Trailblazers</h3>
              <p>
                Ego / Responsible
              </p>
              <p>
              Type 1's are the kingpins of social hierarchies. They will move and step above others for the number one spot (Ego above Friends) 
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/2.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type 2 - Executives</h3>
              <p>
                Responsible / Friends
              </p>
              <p>
              Type 2's are the team leaders, they are defined by their responsibility opportunism rather than specializing in their own corner (Responsible above Specialize).
              </p>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm extra_spacing_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/3.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type 3 - Specialists</h3>
              <p>
              Specialize / Ego
              </p>
              <p>
              Type 3's are the specialists and craftsmen of the group who become the go-to in their focused area, they will narrow in instead of expanding their social impact an thus not rise higher (Specialize above Responsible).
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/learn/advanced/social/4.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Type 4 - Accomodaters</h3>
              <p>
              Friends / Specialize
              </p>
              <p>
              Type 4's are the accomodaters of the group who level the playing field and equalize themselves with their friends above trying to rise higher in the hierarchy (Friends above Ego).
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
        <div className="section_img">
            <img src="/img/learn/advanced/social/one.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Type 1 - Trailblazers</h2>
              <h3 className="margin-sm">Ego / Responsible</h3>
              <p>
              Type 1's are the kingpins of social hierarchies. They will move and step above others for the number one spot (Ego above Friends) 
              </p>
              <p>
              They're responsible to expand their impact on the social structure, rather than specializing in their own niche (Responsible above Specialize).
              </p>
              <p>
              1's are slightly DiOe leaning due to (Ego + Responsible).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Type 2 - Executives</h2>
              <h3 className="margin-sm">Responsible / Friends</h3>
              <p>
              Type 2's are the team leaders of social hierarchies, they are defined by their responsibility for social impact rather than specializing in their own corner (Responsible above Specialize).
              </p>
              <p>
              They will bring others up with them, or move themselves down to equalize rather than focusing themselves on the number one spot (Friends above Ego)
              </p>
              <p>
             Type 2's are slightly OeDe leaning due to (Responsible + Friends).
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/learn/advanced/social/two.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
        <div className="section_img">
            <img src="/img/learn/advanced/social/three.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Type 3 - Specialists</h2>
              <h3 className="margin-sm">Specialize / Ego</h3>
              <p>
              Type 3's are the specialists and craftsmen of the group who become the go-to in their focused area, they will narrow in instead of expanding their social impact an thus not rise higher (Specialize above Responsible).
              </p>
              <p>
              They focus on becoming the number one guy in their particular craft over bringing others with them or equalizing themselves downward (Ego above Friends).
              </p>
              <p>
              3's are slightly OiDi leaning due to (Specialize + Ego).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Type 4 - Accomodaters</h2>
              <h3 className="margin-sm">Friends / Specialize</h3>
              <p>
              Type 4's are the accomodaters of the group who level the playing field and equalize themselves with their friends above trying to rise higher in the hierarchy (Friends above Ego).
              </p>
              <p>
              They will tend to their own abilities within their corner, not striving to attain a higher level of social impact by expanding (Specialize above Ego).
              </p>
              <p>
              Type 4's are slightly DeOi activated due to (Freinds + Specialize).
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/learn/advanced/social/four.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
