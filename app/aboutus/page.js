import Banner from "@components/banner";

export default function Page() {

    return (
        <div className="main">
            <Banner
                background="blue"
                title="About Us"
                section="about"
                type="nav"
            />
            <div className="section_container">
                <div className="section section_images-in">
                    <div className="section_title section_title-mb-less">Our Mission</div>
                    <div className="section_body">
                        <div className="section_text multiple_paragraphs">
                            <div className="multi_paragraph">
                                <h2 className="margin-sm">Community Project</h2>
                                <p>
                                    Personality Academy is a community based platform aimed to provide a space to explore personality theory freely and without misinformation. We teach concepts as simple but nuanced as possible, while also creating applications for you to easily interact with typology.
                                </p>
                                <p>
                                    You are apart of the community, so contact us to provide feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_body section_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops_logo.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">Objective Personality</h3>
                                <p>
                                    We focus on utilizing the Objective Personality System, created by Dave and Shannon, the most. We are not affiliated with Dave and Shannon.
                                </p>
                            </div>
                        </div>
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/aboutus/positive.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">Net Positive Impact</h3>
                                <p>
                                    We focus on the overall positive impact we can have on people. We prioritize using personality systems for improvement and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section_title">Our Team</div>
                        <div className="section_title support_title">Founders</div>
                        <div className="section_body neg-mt-45 support_body">
                            <div className="section_text support_card">
                                <div>
                                <img src="/img/academyplus/sect.png" />
                                <h2>Sujal D</h2>
                                </div>
                            </div>
                            <div className="section_text support_card">
                                <div>
                                <img src="/img/academyplus/aze.png" />
                                <h2>Alex C</h2>
                                </div>
                            </div>
                        </div>
                        <div className="section_title support_title">Contributors</div>
                        <div className="section_body neg-mt-45 contributor_body">
                            <div className="contributor_card">
                                <img src="/img/aboutus/mariko.webp"/>
                                Mariko
                            </div>
                            <div className="contributor_card">
                                <img src="/img/aboutus/denny.webp"/>
                                Denny
                            </div>
                            <div className="contributor_card">
                                <img src="/img/aboutus/kii.webp"/>
                                Kii
                            </div>
                            <div className="contributor_card">
                                <img src="/img/aboutus/tael.webp"/>
                                Tael
                            </div>
                            <div className="contributor_card">
                                <img src="/img/aboutus/esteban.webp"/>
                                Esteban
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}