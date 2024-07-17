import Carousel from "./Carousel";
import Content from "./Content";
import HeroSection from "./HeroSection";
import Pouches from "./Pouches";
import TextLeft from "./TextLeft";
import WhatIsZyn from "./WhatIsZyn";

function DiscoverZyn() {
    return(
		<>
		<link rel="canonical" href="https://www.zyn.com/gb/discover-zyn" />
		<meta title="Discover ZYN Nicotine Pouches | ZYN UK"/>
		<meta name="description" content="Explore the benefits of ZYN nicotine pouches and how they can offer a smoke-free and tobacco-free experience."/>
        <>
            <HeroSection/>
            <Content/>
			<WhatIsZyn/>
			<Carousel/>
			<TextLeft/>
			<Pouches/>
        </>
		</>
    );
}

export default DiscoverZyn;