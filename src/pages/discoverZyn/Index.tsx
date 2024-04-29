import Carousel from "./Carousel";
import Content from "./Content";
import HeroSection from "./HeroSection";
import Pouches from "./Pouches";
import TextLeft from "./TextLeft";
import WhatIsZyn from "./WhatIsZyn";

function DiscoverZyn() {
    return(
        <>
            <HeroSection/>
            <Content/>
			<WhatIsZyn/>
			<Carousel/>
			<TextLeft/>
			<Pouches/>
        </>
    );
}

export default DiscoverZyn;