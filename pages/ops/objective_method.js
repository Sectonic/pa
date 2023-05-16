import Banner from "../../components/banner";

export default function ObjectiveMethod() {
    return (
        <div className="main">
            <Banner
                background="pink"
                title="Objective Method"
                section="ops/home/objective_method"
            />
            <div className="section section_images-in">
                <div className="section_body reverse_body">
                <div className="section_text multiple_paragraphs">
                    <div className="multi_paragraph">
                    <h2 className="margin-sm">What Is OPS?</h2>
                    <p>
                    Objective Personality or "OPS" is a cognitive theory which has been under development by Dave and Shan for upwards of 10 years.
                    OPS utilizes the scientific methods to categorize personality.
                    </p>
                    <p>
                    OPS was developed with the aim of making personality objectively trackable through proper methods, as well as rectifying many of the shortcomings found in other theories.
                    </p>
                    </div>
                    <div className="multi_paragraph">
                    <h2 className="margin-sm">Objectively Trackable</h2>
                    <p>
                    Where other theories fell short, was having something provable and trackable. MBTI and other theories quit after theorizing and have been studied to be as accurate as a coin flip.
                    </p>
                    <p>
                    This is where OPS differs. Objective Personality is based on years of hypothesizing, testing and adapting based on the results.
                    The result of this is a system made up for 512 types where multiple seperate operators can consistently nail down a single type out of 512.
                    </p>
                    </div>
                </div>
                <div className="section_img">
                    <img
                    src={"/img/learn/ops/intro/ops/top.png"}
                    alt=""
                    />
                </div>
                </div>
            </div>
        </div>
    )
}