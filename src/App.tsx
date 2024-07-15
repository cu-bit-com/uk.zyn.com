import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Index';
import AgeGateModal from './components/ageGate/AgeGateModal';
import DiscoverZyn from './pages/discoverZyn/Index';
import WhereToBuy from './pages/whereToBuy/Index';
import HowToZyn from './pages/howToZyn/Index';
import Faq from './pages/faq/Index';
import Offers from './pages/offers/Index';
import WhatIsZyn from './pages/discoverZyn/Index';
import WhichZyn from './pages/whichZyn/Index';
import TermsOfUse from './pages/termsOfUse/Index';
import ImportantInformation from './pages/importantInformation/Index';
import BPost1 from './pages/blogPosts/howNicotinePouchesWork/Index';
import BPost2 from './pages/blogPosts/whatIsNicotine/Index';
import BlogSection from './pages/blogSection/Index';
import AccessDenied from './pages/accessDenied/Index';

function App() {
  const [showAgeGate, setShowAgeGate] = useState(false);

  useEffect(() => {
    const isAgeConfirmed = localStorage.getItem('isAgeConfirmed');

    if (!isAgeConfirmed) {
      setShowAgeGate(true);
    }
  }, []);

  const handleAgeConfirmation = () => {
    localStorage.setItem('isAgeConfirmed', "true");
    setShowAgeGate(false);
  };

  return (
    <BrowserRouter>
      <div>
        {showAgeGate && <AgeGateModal isOpen={true} onConfirm={handleAgeConfirmation} onClose={undefined} />}
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="discover-zyn" element={<DiscoverZyn />} />
            <Route path="where-to-buy" element={<WhereToBuy />} />
            <Route path="how-to-zyn" element={<HowToZyn />} />
            <Route path="blog" element={<BlogSection />} />
            <Route path="faq" element={<Faq />} />
            <Route path="offers" element={<Offers />} />
            <Route path="what-is-zyn" element={<WhatIsZyn />} />
            <Route path="which-zyn-to-choose" element={<WhichZyn />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="important-information" element={<ImportantInformation />} />
			
			
			<Route path="how-do-nicotine-pouches-work" element={<BPost1/>}/>
			<Route path="what-is-nicotine" element={<BPost2/>}/>

          </Route>
			<Route path="access-denied" element={<AccessDenied />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
