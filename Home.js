import React from 'react';
import './App.css';
import Slider from "./slider.js";
import Cards from "./cards.js";
import Footer from "./Footer";
import Text1 from "./text1";
import Text2 from "./text2";



function home() {
  return (
  <main>
      <Slider/>
      <Text1 />
      <Cards />
      <Text2/>
      <Footer/>
          </main>
          );
          }


export default home;
     
      
