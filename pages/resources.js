import Banner from "../components/banner";
import Image from "../components/image";
import Link from 'next/link';

function Resources() {
  return (
    <div className="main">
      <Banner
        background="blue"
        title="Resources"
        section="resources"
        type="nav"
      />
      <div className="section typing_section">
        <h2 className="section_title">Videos & Content</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.youtube.com/c/ObjectivePersonality"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/official.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Objective Personality
                </h3>
                <p>
                  By the creators, Dave & Shan
                  <br />
                  Older content covers core concepts!
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.youtube.com/c/LiJo1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/lijo.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">Lijo</h3>
                <p>General typology content, but has plenty of stuff on OPS.</p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.youtube.com/c/BinyaminTsadikBenMalka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/binyamin.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Binyamin Tsadik
                </h3>
                <p>Interviews and informative OPS content with more depth</p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.youtube.com/c/PersonalityTrainer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/kendrick.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Personality Trainer
                </h3>
                <p>
                  Interviews with the officially typed
                  <br />
                  See how they all act!
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.youtube.com/c/AugmentedPersonality"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/gray.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Augmented Personality
                </h3>
                <p>Videos & Streams focused mostly on OPS.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Learning Sources</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray m0">
            <Link
              href="https://ops-dashboard.herokuapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/subjective.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  Subjective Personality
                </h3>
                <p>
                  Objective Personality & Typology Site with useful tools and
                  articles
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://docs.google.com/document/d/1JlYKh73yyJo15oYb5LTC3EqYmiU51azNV257sP_TFic/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/notes.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  OPS Notes v1
                </h3>
                <p>90+ Pages of OPS Notes to help!</p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://docs.google.com/document/d/1JlYKh73yyJo15oYb5LTC3EqYmiU51azNV257sP_TFic/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/directory.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  OPS Link Directory
                </h3>
                <p>A collection of links regarding OPS</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Tools & Utilities</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray m0">
            <Link
              href="https://opt-toy.vercel.app/?fbclid=IwAR2Xyj2zQNKmUDOOxovsrvUEgla9esiqFrYS5CF9koni6Zv2X04cEczOm9k#?type[]=Dx/Ox-%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/diagram.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Type Diagram Tool
                </h3>
                <p>
                  Create visual representations of types with a simple coin
                  checklist
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://ops-dashboard.herokuapp.com/analyzer?m=FF&s1=Fe&s2=Se&a=PCSB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/analyzer.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  Type Analyzer
                </h3>
                <p>
                  Input a type to see it's aspects listed simply and see people
                  similarly typed
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://ops-dashboard.herokuapp.com/practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/practice.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  Type Practice Tool
                </h3>
                <p>
                  Type random officially typed people and check your guesses
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://airtable.com/shrQ6IoDtlXpzmC1l/tblyUDDV5zVyuX5VL/viweXFJuHAQpi5as3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/database.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">
                  Airtable Database
                </h3>
                <p>
                  A database with all officially typed celebrities and community
                  members
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://ops-dashboard.herokuapp.com/search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/search.png"
                  class="typing_img-home"
                />
                <h3 className="typing_title-h3 resources_title">Search Tool</h3>
                <p>
                  An Alternative to Airtable <br /> Search database with OPS,
                  Enneagram, and Socionics!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">Groups</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray m0">
            <Link
              href="https://discord.com/invite/s4v5yQdnE9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/main/logo.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Personality Academy
                </h3>
                <p>
                  A chill discord server that makes personality type useful
                  through OPS. Anyone is welcome to join!
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9aoDFBV53yy0SmNPog6XEGpm_STtU8VIZossofHIFY_V0nQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/unofficial.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Unofficial Class Server
                </h3>
                <p>
                  Discord community ONLY for members of the OPS Class and those
                  typed by Dave & Shan
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://www.facebook.com/groups/objectivepersonality/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/img/resources/facebook.png"
                  class="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Class Only Facebook
                </h3>
                <p>
                  A large OPS Class Facebook community, for better or worse.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
