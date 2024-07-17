import HeroSection from "./HeroSection";
import Images from "./Images";
import DiscoverZyn from "./DiscoverZyn";
import Blog from "../blogSection/Index";

function Home() {
	return (
	<>
	<link rel="canonical" href="https://www.zyn.com/gb/" />
	<meta title="Discover ZYN Nicotine Pouches | ZYN UK"/>
	<meta name="description" content="Explore the benefits of ZYN nicotine pouches and how they can offer a smoke-free and tobacco-free experience."/>
  
    <div className="homeWrapper">
      <HeroSection />
	  <DiscoverZyn/>
      <Images />
      <Blog />
    </div>
	</>
  );
}

export default Home;
