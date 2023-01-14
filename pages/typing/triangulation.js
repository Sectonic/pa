import ChangeSection from "../../components/change_section";
import Banner from "../../components/banner";

function Triangulation() {
  return (
    <div className="main">
      <Banner
        background="yellow"
        title="Triangulation"
        section="triangulation"
        type="typing"
      />
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img">
            <img
              src="/img/typing/triangulation/principle.png"
              alt=""
            />
          </div>
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">The Principle</h2>
              <p>
              The principle of Triangulation is to nail down your type based on consistent trackable patterns. 
              </p>
              <p>
              Triangulation is about gathering seperate external and unbiased data points about your type, 
              then triangulating your type based on the consistent patterns which emerge from your data.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Accuracy</h2>
              <p>
              Triangulation is just basic math once it comes down to it. It can only provide as much as you put in.
              If you've got a good amount of data, your results will be accurate, but if your data is unreliable and scarce, 
              the results won't be reliable either.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Sample Size</h2>
              <p>
                To have a proper guess, you need a good amount of people to have
                typed you
              </p>
              <p>
                0-5 <strong>Meh</strong>
                <br />
                5-10 <strong>Good</strong>
                <br />
                10-20 <strong>Great</strong>
                <br />
                0-5 <strong>Outstanding</strong>
                <br />
              </p>
              <p>Below 5 is not enough</p>
            </div>
          </div>
          <div className="section_img section_img-mid">
            <img src="/img/typing/triangulation/sample.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body">
          <div className="section_img section_img-mid">
            <img
              src="/img/typing/triangulation/percentage.png"
              alt=""
            />
          </div>
          <div className="section_text outline-gray">
            <div>
              <h2 className="margin-sm">Percentage</h2>
              <p>
                Every coin needs to have a high percetange of people's guesses
                for it to be reasonable
              </p>
              <p>
                60% - 70% <strong>Meh</strong>
                <br />
                70% - 80% <strong>Good</strong>
                <br />
                80% - 90% <strong>Great</strong>
                <br />
                90% - 100% <strong>Outstanding</strong>
                <br />
              </p>
              <p>Below 60% and it's a coin toss</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_body">
          <div className="section_text section-title_images-in">
            <div className="section_title-img">
              <img src="/img/typing/triangulation/data.png" alt="" />
            </div>
            <div className="section_title-text">
              <h2>Where Do I Get Data?</h2>
            </div>
          </div>
        </div>
        <div className="section_body section_texts-sm neg-mt-20">
          <div className="section_text">
            <div>
              <h3 className="margin-sm">OPS Typists</h3>
              <p>
                Avoid hearing anything from anyone about their type before you
                finalize your typing. <br />
                If you do, be aware of the bias
              </p>
            </div>
          </div>
          <div className="section_text">
            <div>
              <h3 className="margin-sm">Typing Teams</h3>
              <p>
                Get typed by a team, and ask for the data from everyone who
                typed you, then use the data in the document.
              </p>
            </div>
          </div>
          <div className="section_text">
            <div>
              <h3 className="margin-sm">Friends & Family</h3>
              <p>
                This is more of a last resort, but it's better than nothing.
                <br />
                You can do your best to try and explain the coins to people who
                know you, and have them tell you what their opinions are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Triangulation;
