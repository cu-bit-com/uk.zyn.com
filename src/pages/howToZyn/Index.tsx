import HeroSection from "./HeroSection";
import Content from "./Content";
import Image from "./Image";
import Title from "./Title";
import HowToUse from "./HowToUse";
import Questions from "./Questions";
import BlogSection from "./BlogSection";

function HowToZyn() {
    return (
        <div className="homeWrapper">
            <HeroSection/>
            <Title/>
            <Content/>
            <Image/>
			<HowToUse/>
			<Questions/>
			<BlogSection/>
        </div>
    );
}

export default HowToZyn;