import Banner from "@components/banner";
import Link from 'next/link';
import { verifyUser } from "@lib/user";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Academy Apps',
  description: 'Our own easy to use OPS tools',
  url: '/apps',
});

async function AcademyApps() {

  const verified = await verifyUser(cookies().get('hash'));
  if (!verified) {
    redirect('/login');
  }

  return (
    <div className="main">
        <Banner
          background="blue"
          title="Academy Apps"
          section="tools"
          type="nav"
        />
        <div className="section typing_section">
          <h2 className="section_title">Objective Personality Apps</h2>
          <div className="section_body top_typing">
            <div className="section_text outline-gray">
              <Link href="/apps/typetool">
                <div>
                  <img
                    src="/img/main/type_tool.png"
                    alt=""
                    className="typing_img-home"
                  />
                  <h3 className="typing_title-h3">TypeTool</h3>
                  <p>
                  Unfold the personality code
                  </p>
                </div>
              </Link>
            </div>
            <div className="section_text outline-gray">
              <Link href="/apps/typesearch">
                <div>
                  <img
                    src="/img/main/database.png"
                    alt=""
                    className="typing_img-home"
                  />
                  <h3 className="typing_title-h3">TypeSearch</h3>
                  <p>
                  Easily look up typed people
                  </p>
                </div>
              </Link>
            </div>
            <div className="section_text outline-gray">
              <Link href="/typing/d&s_typing">
                <div>
                  <img
                    src="/img/main/typing_academy.png"
                    alt=""
                    className="typing_img-home"
                  />
                  <h3 className="typing_title-h3">Typing Academy</h3>
                  <p>
                    Practise your typing skills
                  </p>
                </div>
              </Link>
            </div>
          </div>
          </div>
    </div>
  )
} 

export default AcademyApps;