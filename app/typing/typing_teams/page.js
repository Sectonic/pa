import Banner from "@components/banner";
import Link from 'next/link';
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Typing Teams',
  description: 'An alternative approach to official typing, teams',
  image: '/embed/typing_teams.png',
  url: '/typing/typing_teams',
});

function typingTeams() {
  return (
    <div className="main">
      <Banner
        background="pink"
        title="Typing Teams"
        section="teams"
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
              <h2 className="margin-sm">Educated Guesses</h2>
              <p>
              Getting typed by a team gives you easy access to some good educated guesses about your type. 
              </p>
              <p>
              The accuracy you can expect may fluctuate depending on the team.
              Overall you can expect teams to have fairly good accuracy and at the very least give you a good idea of what your type may be.
              </p>
            </div>
            <div className="multi_paragraph">
              <h2 className="margin-sm">Good Enough</h2>
              <p>
              If you're looking for a typing that's just about good enough, getting typed by a team and rolling with it isn't such a bad idea.
              A team will be able to get your type down way better than yourself, even if they don't get each and every detail right.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section_images-in">
        <div className="section_body reverse_body">
          <div className="section_text multiple_paragraphs">
            <div className="multi_paragraph">
              <h2 className="margin-sm">Combine Approaches</h2>
              <p>
              If you want to step things up and increase the accuracy of your typing, you can use the data you get from typing teams through the Triangulation approach.
              </p>
              <p>
              All it takes is essentially just to use the data received from typing teams in a Triangulation doc.
              </p>
            </div>
          </div>
          <div className="section_img">
            <img src="/img/typing/teams/combine.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section typing_section">
        <h2 className="section_title">The Free Options</h2>
        <div className="section_body top_typing">
          <div className="section_text outline-gray m0">
            <Link
              href="https://sites.google.com/view/cognitive-resolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="/img/typing/teams/crg.png"
                  alt=""
                  className="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">
                  Cognitive Resolution Teams
                </h3>
                <p>
                CRG is comprised of multiple typings teams. Accuracy is fairly consistent, wait time is around a month.
                </p>
              </div>
            </Link>
          </div>
          <div className="section_text outline-gray m0">
            <Link
              href="https://discord.com/invite/FcqsJHXCBR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="/img/typing/teams/pa.png"
                  alt=""
                  className="typing_img-home rounded_edges-img"
                />
                <h3 className="typing_title-h3 resources_title">Personality Academy</h3>
                <p>Opinions by willing typists, only for active members of the community. 
                  Accuracy is highly dependent on the typists.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="section_body top_typing">
        </div>
      </div>
    </div>
  );
}

export default typingTeams;