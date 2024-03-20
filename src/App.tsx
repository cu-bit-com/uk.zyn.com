import React from 'react';
import './App.css';
import Home from "./components/pages/home/Index";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/pages/layout/Layout';
import Shop from './components/pages/shop/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
/*<Route path='where-to-buy' element={}/>
          <Route path='how-to-zyn' element={}/>
          <Route path='blog' element={}/>
          <Route path='contact' element={}/> */
export default App;
