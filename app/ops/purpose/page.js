import Banner from "@components/banner";
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Purpose of OPS',
  description: 'Intro: What OPS Strives toward',
  url: '/ops/purpose',
});

export default function Purpose() {
    return (
        <>
            <Banner
                background="pink"
                title="Purpose of OPS"
                section="ops/home/purpose"
            />
            <div className="section_container">
                <div className="section section_images-in">
                    <div className="section_body reverse_body">
                    <div className="section_text multiple_paragraphs">
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Default Wirings</h2>
                        <p>
                            The creators of OPS, Dave and Shannon (known as Dave & Shan), consider these 9 binary coins as the 'default wiring' of an individual. The coins create reoccuring and consistent patterns in someone's life which is the main focus of OPS.
                        </p>
                        <p>
                            This default wiring appear in every aspect of your life. These consistent patterns are what hold you back in your life. The default wiring is not based on patterns of positive aspects and what someone contributes. It is the opposite.
                        </p>
                        </div>
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Focus of the Patterns</h2>
                        <p>
                            What this default wiring really focuses on are the negative aspects, the pitfalls of someone's life, and where they can grow. It focuses on which patterns in your life are causing you the most pain and stagnation.
                        </p>
                        <p>
                        This leads to a more accurate personality reading for self growth. OPS should be viewed not just as another personality theory but as a tool that can help you understand and grow yourself.
                        </p>
                        </div>
                    </div>
                    <div className="section_img">
                        <img
                        src={"/img/learn/ops/intro/purpose/default_wiring.png"}
                        alt=""
                        />
                    </div>
                    </div>
                </div>
                <div className="section section_images-in">
                    <div className="section_body">
                        <div className="section_img">
                            <img
                            src={"/img/learn/ops/intro/purpose/genetic_code.png"}
                            alt=""
                            />
                        </div>
                    <div className="section_text multiple_paragraphs">
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">Use of the Spectrum</h2>
                        <p>
                            Dave & Shan prioritize using the scientific method for categorizing personality. This assumes an objective form of personality, how can that be? How OPS portrays personality objectively is through the use of the spectrum.
                        </p>
                        <p>
                            Instead of narrowing down to an individual's traits and patterns, the system expands and looks at where the individual falls in between everyone else's traits & patterns. It inquires, "Where does your personality fit in alongside everyone else's personalities?"
                        </p>
                        </div>
                        <div className="multi_paragraph">
                        <h2 className="margin-sm">The Genetic Code</h2>
                        <p>
                            Through tracking the spectrum and not the individual, every personality type tends to run in a specific direction compared to the others. This means that the default wiring of each type become very recognizable and consistent.
                        </p>
                        <p>
                            Because of its consistency, Dave & Shan term the 9 coins as the "Genetic Code." Regardless of the truth in this claim, the point is that, through externally tracking an individual compared to others, OPS strives and achieves a consistency for each type that is unmatched by other systems.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}