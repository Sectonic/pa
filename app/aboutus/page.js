import Banner from "@components/banner";

export default function Page() {

    return (
        <div className="main">
            <Banner
                background="yellow"
                title="About Us"
                section="about"
                type="nav"
            />
        </div>
    );
}