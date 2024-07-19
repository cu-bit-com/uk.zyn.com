import HeroSection from "./HeroSection";
import Image from "./Image";
import Title from "./Title";
import Questions from "./Questions";
import BlogSection from "../blogSection/Index";

function HowToZyn() {
	
    return (
		<>
		<link rel="canonical" href="https://www.zyn.com/gb/how-to-zyn" />
		<meta title="How To Zyn"/>
		
        <div className="homeWrapper">
            <HeroSection/>
            <Title/>
            <Image/>
			<Questions/>
			<BlogSection/>
        </div>
		</>
    );
}

export default HowToZyn;