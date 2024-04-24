import './App.css';
import Home from "./pages/home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Shop from './pages/shop/Index';
import WhereToBuy from './pages/whereToBuy/Index';
import HowToZyn from './pages/howToZyn/Index';
import Blog from './pages/blog/Index';
import Contact from './pages/contact/Index';
import Offers from './pages/offers/Index';
import WhatIsZyn from './pages/whatIsZyn/Index';
<<<<<<< HEAD
import AgeRestriction from './pages/ageRestiction/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='where-to-buy' element={<WhereToBuy/>}/>
            <Route path='how-to-zyn' element={<HowToZyn/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='offers' element={<Offers/>}/>
            <Route path='what-is-zyn' element={<WhatIsZyn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='forbidden' element={<AgeRestriction/>}/>
        </Routes>
      </BrowserRouter>
    </>
=======
import Post from './pages/post/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='where-to-buy' element={<WhereToBuy/>}/>
          <Route path='how-to-zyn' element={<HowToZyn/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='offers' element={<Offers/>}/>
          <Route path='what-is-zyn' element={<WhatIsZyn/>}/>
          <Route path='blog/post' element={<Post/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> 61063f126351a9d52c55a9dfb3602555c9c554e1
  );
}

export default App;
