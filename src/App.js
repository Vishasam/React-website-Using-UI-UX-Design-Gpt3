import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3} from './containers';
import Header from './containers/header/Header';
import Auth from './Auth';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import {Routes,Route} from 'react-router-dom'



const App = () => {
  return (
    <div className = 'App'>
      <div className="gradient__bg">
        {/* <Routes>
          <Route path='/' element={Header}/>
          <Route path='/auth' element={Auth}/>
        </Routes> */}
         <Navbar />
        <Header /> 
      </div>
     
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App