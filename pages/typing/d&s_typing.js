import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function dsTyping() {
  return (
    <div className="main">
      <Banner
        background="blue"
        title="D&S Typing"
        section="d&s"
        type="typing"
      />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src="/img/typing/d&s/accurate.png"
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Accuracy</h2>
              <p>
              Dave & Shan are the creators of OPS and have years of practice perfecting their typing method. 
              Therefore they're probably the most accurate way to get typed when it comes to OPS.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">No Claims</h2>
              <p>
              Dave & Shan are human like anyone else, they can make mistakes and that's okay.
              They do NOT claim any kind of accuracy. 
              </p>
              <p>
              You are paying exclusively for their opinions in an incomplete personality system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section functions">
        <h2 className="section_title margin-sm">At What Cost</h2>
        <div className="section_body section_texts-sm">
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/typing/d&s/money.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Costs +100$</h3>
              <p>
                x4 Monthly 19$ subscription & 59$ typing payment
              </p>
            </div>
          </div>
          <div className="section_text outline-grey">
            <div className="text-sm_img">
              <img src={"/img/typing/d&s/time.png"} alt="" />
            </div>
            <div className="text-sm_desc">
              <h3 className="section_subtitle margin-sm">Takes 4 Months</h3>
              <p>
                From class signup to eventually receiving your type
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Not For Everyone</h2>
              <p>
                Getting officially typed costs upwards of 100$ and takes around 4 months in total.
                Needless to say, it's quite pricy and a long time to wait.
              </p>
              <p>
                Paying a lot to get typed by the creators of a pseudoscientific personality theory is not for everyone.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Who's This For?</h2>
              <p>
                If you've got that spare change and want that extra certainty about your type,
                getting typed by D&S is not so bad of an idea.
              </p>
              <p>
                It's just important to realize this isn't the only way, or a requirement for being into OPS.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/d&s/choice.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src="/img/typing/d&s/signup.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Join Class for 90 Days</h2>
              <p>
                The first step to get typed is to sign up for the OPS class for 90 consecutive days.
                In practise this means paying for 4 months which is around 76$.
              </p>
            </div>
            <ChangeSection link="https://www.objectivepersonalitysystem.com/signup" text="Join the Class" src="/img/typing/d&s/signup_btn.png" type="multi" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Apply For Typing</h2>
              <p>
                After 90 days, you can finally apply on their specified monthly date. You'll have to fill out a document as well as send in a typing video that's around 45-90min 
                based on the instructions on the instructions on their page.
              </p>
              <p>
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Time Window</h2>
              <p>
                Typing submissions are typically only open for around 15-40 minutes as they only take a limited amount of people each month.
                Therefore it's important to check the exact time in your timezone and be ready to go.
              </p>
              <p>
                
              </p>
            </div>
            <ChangeSection link="https://www.objectivepersonalitysystem.com/videotyping" text="Apply for Typing" src="/img/typing/d&s/apply.png" type="multi"/>
          </div>
          <div className="section_img">
            <img src="/img/typing/d&s/submit.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src="/img/typing/d&s/receive.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Receive Your Type</h2>
              <p>
              After around a month after you've submitted your typing video to D&S you'll 
              receive an email with your type and a few very basic notes.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Services</h2>
              <p>
              Dave & Shan do not promise you any explanations or discussions about your type, the opinions you recieve are as is.
              You may have some luck with asking simple questions however, they do tend to respond.
              </p>
            </div>
            <ChangeSection link="https://www.objectivepersonalitysystem.com/" text="The Official Website" src="/img/typing/d&s/website.png" type="multi"/>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Retyping?</h2>
              <p>
              If you after months and months of processing your type can't seem to make any sense of it, Dave & Shan do offer retypings.
              </p>
              <p>
              For retypings D&S require you to send in a video link, mention the coin you think is off, as well as the timestamps for
              where this coin presents itself. The video should be of you talking naturally, not a conviction to D&S.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/d&s/retype.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img src="/img/main/database.png" alt="" />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">TypeSearch</h2>
              <p>
              If you've gotten officially typed, you can help out the community by applying for our Type Search database!
              </p>
              <p>
              TypeSearch is a type lookup tool that makes it easy to find others with similar types to yourself so you can more easily draw comparisons and learn about type!
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Got Retyped?</h2>
              <p>
              If your type was changed, be sure to send in an application for us so we can correct your type in our database as well!
              </p>
            </div>
            <ChangeSection link="https://docs.google.com/forms/d/e/1FAIpQLSfJj8DJiqCg5AGLov3oiEn3P8WTOTyUkxjh4hkLZsVAbAQihw/viewform" text="Join our Database" src="/img/typing/d&s/typesearch_btn.png" type="multi"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dsTyping;
