import HeroSection from "./HeroSection";
import Content from "./Content";
import Images from "./Images";

function Home() {
    return (
        <div className="homeWrapper">
            <HeroSection/>
            <Content/>
            <Images/>
        </div>
    );
}

export default Home;