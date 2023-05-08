import Banner from "../../components/banner";
import Link from 'next/link';
import Placeholder from '../../components/placeholder';
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import { waitUntil, WAIT_FOREVER } from 'async-wait-until';

function AcademyApps({user}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function checkUser() {
      await waitUntil(() => user != null, {
        timeout: WAIT_FOREVER,
      });
      if (user.active) {
        setLoading(false);
      } else {
        router.push('/login');
      }
    }
    checkUser();
  }, [user])
  return (
    <div className="main">
      {loading ? (
          <Placeholder/>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
} 

export default AcademyApps;