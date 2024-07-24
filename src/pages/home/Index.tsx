import HeroSection from "./HeroSection";
import Images from "./Images";
import DiscoverZyn from "./DiscoverZyn";
import Blog from "../blogSection/Index";

import React from 'react';
import { Helmet } from 'react-helmet';


function Home() {
	return (
	<>
	<Helmet>
	<link rel="canonical" href="https://www.zyn.com/gb/" />
	<meta title="ZYN Tobacco-Free Nicotine Pouches | ZYN UK"/>
	<meta name="description" content="Discover ZYN's tobacco-free nicotine pouches for a cleaner, smoke-free alternative. Learn more and buy online today."/>
	</Helmet>
	
  
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
