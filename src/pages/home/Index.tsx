import HeroSection from "./HeroSection";
import Images from "./Images";
import DiscoverZyn from "./DiscoverZyn";
import Blog from "../blogSection/Index";

import React,  { useEffect } from 'react';
import { Helmet } from 'react-helmet';


function Home() {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to top when the component mounts
		const hash = window.location.hash.substring(1);
		if (hash) {
		  const element = document.getElementById(hash);
		  if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		  }
		}
	  }, []);
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
