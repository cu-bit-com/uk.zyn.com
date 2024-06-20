import HeroSection from "./HeroSection";
import Images from "./Images";
import DiscoverZyn from "./DiscoverZyn";
import Blog from "../blogSection/Index";

function Home() {

  return (
    <div className="homeWrapper">
      <HeroSection />
	  <DiscoverZyn/>
      <Images />
      <Blog />
    </div>
  );
}

export default Home;
