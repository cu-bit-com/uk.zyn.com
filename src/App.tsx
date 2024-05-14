import './App.css';
import Home from "./pages/home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import WhereToBuy from './pages/whereToBuy/Index';
import HowToZyn from './pages/howToZyn/Index';
import Blog from './pages/blog/Index';
import Faq from './pages/faq/Index';
import Offers from './pages/offers/Index';
import WhatIsZyn from './pages/whatIsZyn/Index';
import Post from './pages/post/Index';
import DiscoverZyn from './pages/discoverZyn/Index';
import WhichZyn from './pages/whichZyn/Index';
import TermsOfUse from './pages/termsOfUse/Index';
import ImportantInformation from './pages/importantInformation/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='discover-zyn' element={<DiscoverZyn/>}/>
          <Route path='where-to-buy' element={<WhereToBuy/>}/>
          <Route path='how-to-zyn' element={<HowToZyn/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='faq' element={<Faq/>}/>
          <Route path='offers' element={<Offers/>}/>
          <Route path='what-is-zyn' element={<WhatIsZyn/>}/>
          <Route path='blog/post' element={<Post/>}/>
		  <Route path='which-zyn-to-choose' element={<WhichZyn/>}/>
		  <Route path='terms-of-use' element={<TermsOfUse/>} />
		  <Route path='important-information' element={<ImportantInformation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
