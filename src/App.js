import React from 'react';
//import Layout from './component/layout';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';
import Minting from './component/subpage/minting';
import Sell from './component/subpage/sell';
import Info from './component/subpage/info';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';



function App(){
  return (
    <div>
        <Router>
          <Header />
          <div className='body_wrapper'>
            <div className='body_content'>
              <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/minting" element={ <Minting /> } />
                  <Route path="/sell" element={ <Sell /> } />
                  <Route path="/info" element={ <Info /> } />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
