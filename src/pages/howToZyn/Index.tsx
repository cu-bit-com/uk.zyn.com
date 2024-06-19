import HeroSection from "./HeroSection";
import Image from "./Image";
import Title from "./Title";
import Questions from "./Questions";
import Blog from "./Blog";

function HowToZyn() {
    return (
        <div className="homeWrapper">
            <HeroSection/>
            <Title/>
            <Image/>
			<Questions/>
			<Blog/>
        </div>
    );
}

export default HowToZyn;