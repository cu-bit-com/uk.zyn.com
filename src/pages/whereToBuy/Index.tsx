import Content from "./Content";
import HeroSection from "./HeroSection";
import PartnerLogos from "./PartnerLogos";
import Where from "./Where";

function WhereToBuy() {
    return (
        <>
		<link rel="canonical" href="https://www.zyn.com/gb/where-to-buy" />
		<meta title="Where to Buy ZYN Nicotine Pouches | ZYN UK"/>
		<meta name="description" content="Locate stores and online retailers where you can purchase ZYN nicotine pouches conveniently."/>
            <HeroSection/>
			<Where/>
            <PartnerLogos/>
            <Content/>
        </>
    );
}

export default WhereToBuy;