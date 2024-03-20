import HeroSection from "./HeroSection";
import Content from "./Content";
import Images from "./Images";
import Title from "./Title";

function HowToZyn() {
    return (
        <div className="homeWrapper">
            <Title/>
            <HeroSection/>
            <Content/>
            <Images/>
        </div>
    );
}

export default HowToZyn;