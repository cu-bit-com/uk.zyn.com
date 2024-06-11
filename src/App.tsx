import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Index';
import AgeGateModal from './components/ageGate/AgeGateModal'; // Import the AgeGateModal component
import DiscoverZyn from './pages/discoverZyn/Index';
import WhereToBuy from './pages/whereToBuy/Index';
import HowToZyn from './pages/howToZyn/Index';
import Blog from './pages/home/Blog';
import Faq from './pages/faq/Index';
import Offers from './pages/offers/Index';
import WhatIsZyn from './pages/discoverZyn/Index';
import Post from './pages/post/Index';
import WhichZyn from './pages/whichZyn/Index';
import TermsOfUse from './pages/termsOfUse/Index';
import ImportantInformation from './pages/importantInformation/Index';

function App() {
  const [showAgeGate, setShowAgeGate] = useState(false);

  useEffect(() => {
    // Check if the user has already confirmed their age
    const isAgeConfirmed = localStorage.getItem('isAgeConfirmed');

    // If age is not confirmed, show the age gate
    if (!isAgeConfirmed) {
      setShowAgeGate(true);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleAgeConfirmation = () => {
    // Set flag in localStorage to indicate age confirmation
    localStorage.setItem('isAgeConfirmed', "true");
    // Hide the age gate modal
    setShowAgeGate(false);
  };

  return (
    <BrowserRouter>
      <div>
        {/* Render AgeGateModal regardless of the route */}
        {showAgeGate && <AgeGateModal isOpen={true} onConfirm={handleAgeConfirmation} onClose={undefined} />}
        
        {/* Render other routes */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="discover-zyn" element={<DiscoverZyn />} />
            <Route path="where-to-buy" element={<WhereToBuy />} />
            <Route path="how-to-zyn" element={<HowToZyn />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<Faq />} />
            <Route path="offers" element={<Offers />} />
            <Route path="what-is-zyn" element={<WhatIsZyn />} />
            <Route path="blog/post" element={<Post />} />
            <Route path="which-zyn-to-choose" element={<WhichZyn />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="important-information" element={<ImportantInformation />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
