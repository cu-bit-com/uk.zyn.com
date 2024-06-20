import HeroSection from "./HeroSection";
import Image from "./Image";
import Title from "./Title";
import Questions from "./Questions";
import BlogSection from "../blogSection/Index";

function HowToZyn() {
    return (
        <div className="homeWrapper">
            <HeroSection/>
            <Title/>
            <Image/>
			<Questions/>
			<BlogSection/>
        </div>
    );
}

export default HowToZyn;