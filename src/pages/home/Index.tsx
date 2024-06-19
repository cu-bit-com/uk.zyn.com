import HeroSection from "./HeroSection";
import Content from "./Content";
import Images from "./Images";
import DiscoverZyn from "./DiscoverZyn";
import Blog from "./Blog";

function Home() {

  return (
    <div className="homeWrapper">
      <HeroSection />
	  <DiscoverZyn/>
      <Content />
      <Images />
      <Blog />
    </div>
  );
}

export default Home;
