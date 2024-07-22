import HeroSection from "./HeroSection";
import Image from "./Image";
import Title from "./Title";
import Questions from "./Questions";
import BlogSection from "../blogSection/Index";

function HowToZyn() {
	
    return (
		<>
		<link rel="canonical" href="https://www.zyn.com/gb/how-to-zyn" />
		<meta title="How To Use ZYN Nicotine Pouches | ZYN UK"/>
		<meta name="description" content="Learn the best practices for using ZYN, including how to use ZYN and how to dispose of ZYN nicotine pouches"/>
		
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