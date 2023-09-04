import Banner from "@components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Objective Method',
  description: 'Intro: The Objective Method behind OPS',
  url: '/ops/objective_method',
});

export default function ObjectiveMethod() {
    return (
        <div className="main">
            <Banner
                background="pink"
                title="Objective Method"
                section="ops/home/objective_method"
            />
            <div className="section_container">
                <div className="section section_images-in">
                    <div className="section_body">
                    <div className="section_img">
                        <img
                        src={"/img/learn/ops/intro/method/disclaimer.png"}
                        alt=""
                        />
                    </div>
                    <div className="section_text multiple_paragraphs">
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Attempt at Scienctific Method</h2>
                        <p>
                            Objective Personality tries to implement ideas of the scientific method into its system. The reason it is laid out is because the system relies on trackable evidence rather than anecdotal evidence. It's goal is to minimize subjectivity during a typing process which is why they opt to pursue the scientific approach.
                        </p>
                        </div>
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Disclaimer</h2>
                        <p>
                            The Objective Personality System <i>is not</i> actually real science. This may confuse you because it has the name "Objective" in it. What it does do though is try to use methodology and procedures akin to the scientific method to minimize people's misperceptions of themselves.
                        </p>
                        <p>
                            It has largely been a critique of the system that the name does not follow what it does, but another case is that the <i>point</i> of the name is to showcase its attempt at minimizing misperception. The Objective methodology below is to help people type themselves and others better, and it is not an attempt to prove its scientific validity.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section section_images-in">
                    <div className="section_body reverse_body">
                    <div className="section_text multiple_paragraphs">
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Anecdotal Evidence</h2>
                        <p>
                            The majority of typology systems are based on anecdotal evidence. This means that people are mostly taking their personal accounts on their personality, without considering the truth or reliability in it. 
                        </p>
                        <p>
                            OPS sees the impact this can have on understanding your genuine personality in the system: someone can <i>feel</i> that they have one trait, but actually have something else. This leaded them to use behavioral patterns through trackable evidence instead.
                        </p>
                        </div>
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Trackable Evidence</h2>
                        <p>
                            Trackable evidence is not something a person just <i>feel</i> about themselves, but what they actually do in their life. It is something observable to the people around the person as well, it can be <i>tracked</i>.
                        </p>
                        <p>
                            The procedure to use for tracking behaviors is: observation, speculation, repetition, validification, and conclusion (talked about below). With this procedure, you can check whether or not they <i>really</i> do have a behavioral pattern. During personality typing, we can often misperceive someone's true behavior and cognition. This helps that.
                        </p>
                        </div>
                    </div>
                    <div className="section_img">
                        <img
                        src={"/img/learn/ops/intro/method/evidence.png"}
                        alt=""
                        />
                    </div>
                    </div>
                </div>
                <div className="section">
                    <div className="section_body">
                        <div className="section_img section_img">
                            <img
                                src={"/img/learn/ops/intro/method/procedure.png"}
                            />
                        </div>
                    </div>
                    <h2 className="section_title neg-mt-45">The Typing Procedure</h2>
                    <div className="section_body section_texts-sm extra_spacing_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops/intro/method/observation.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">1. Observation</h3>
                                <p>
                                    You first observe someone having a trait or performing an action
                                </p>
                            </div>
                        </div>
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops/intro/method/hypothesis.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">2. Speculation</h3>
                                <p>
                                    You then speculate that this could mean they have a certain behavioral pattern
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_body section_texts-sm extra_spacing_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops/intro/method/experiment.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">3. Repetition</h3>
                                <p>
                                    You don't stop at speculation. You have to catch this behavior <i>multiple</i> times and consistently.
                                </p>
                            </div>
                        </div>
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops/intro/method/conclusion.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">4. Validification</h3>
                                <p>
                                    You either validify that they have this trait through the repetition, or they dont - questioning another trait.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_body section_texts-sm extra_spacing_texts-sm">
                        <div className="section_text outline-trans">
                            <div className="text-sm_img home-top_img">
                                <img
                                src={"/img/learn/ops/intro/method/result.png"}
                                />
                            </div>
                            <div className="text-sm_desc">
                                <h3 className="section_subtitle margin-sm">5. Conclusion</h3>
                                <p>
                                    The cycle above continues until you finally have a solid conclusion with good repetition. You now know they have that behavioral pattern.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section_images-in">
                    <div className="section_body">
                        <div className="section_img">
                            <img
                            src={"/img/learn/ops/intro/method/onto.png"}
                            alt=""
                            />
                        </div>
                        <div className="section_text multiple_paragraphs">
                            <div className="multi_paragraph">
                                <h2 className="margin-sm">Onto the System</h2>
                                <p>
                                    You now know the underlying concepts that build up OPS: from its use of spectrums and binary coins, to the objective method. 
                                </p>
                                <p>
                                    Next up is learning the 9 binary coins in Objective Personality. The coins are the building blocks of the system; they serve as the distinguishing behavior patterns we talked about in the procedure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}