import React from "react";
import HeroSection from "./HeroSection";
import Header from "../../common/header/Index";
import Content from "./Content";
import Images from "./Images";
import Footer from "../../common/footer/Index";

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