import React from 'react';
import './App.css';

/*import Slider from "./slider.js";
import Cards from "./cards.js";
import Footer from "./Footer";
import Text1 from "./text1";
import Text2 from "./text2";*/
import Home from "./Home";
import Login from "./login";
import Sign from "./sign.js";
import Contact from "./Contact.tsx";
import Apropos from "./Apropos";
import Blog from "./blog";




import { Routes,Route,NavLink } from 'react-router-dom';


function App() {
  return (
  <>
    <header>
      <nav className="navbar flex pt-5">
        <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />
        <NavLink to='/Home'>Accueil</NavLink>
        <NavLink to='/'>Avocats</NavLink>
        <NavLink to='/#cards'>Domaines Juridique</NavLink>
        <NavLink to='/Apropos'>A propos</NavLink>
        <NavLink to='/Blog'>Blog</NavLink>

        <NavLink to='/Contact'>Contacter nous</NavLink>
        <NavLink to='/sign'>S'inscrire</NavLink>
        <NavLink to='/login'>Se connecter</NavLink>
        
      </nav>
      </header>

 
       <Routes>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/sign' element={<Sign/>}/>
       <Route path='/Apropos' element={<Apropos/>}/>
       <Route path='/blog' element={<Blog/>}/>


       </Routes>
          </>
          );
          }


export default App;
     
      
