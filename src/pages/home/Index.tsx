import HeroSection from "./HeroSection";
import Content from "./Content";
import Images from "./Images";
import BlogSection from "./Blog";

function Home() {

  return (
    <div className="homeWrapper">
      <HeroSection />
      <Content />
      <Images />
      <BlogSection />
    </div>
  );
}

export default Home;
