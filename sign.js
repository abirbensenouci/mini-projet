import './App.css';
import React from 'react';


 



        

function SignUpForm() {
        const handleSignInClick = () => {
          const overlay_container = document.querySelector(".container .overlay-container");
          const overlay = document.querySelector(".container .overlay-container .overlay");
          const signInForm = document.querySelector(".container .sign-in-form");
          const signUpForm = document.querySelector(".container .sign-up-form");
          overlay_container.style.transform = "translateX(100%)";
          overlay.style.transform = "translateX(-50%)";
          signInForm.classList.add("active");
          signUpForm.classList.remove("active");
        };
      
        const handleSignUpClick = () => {
          const overlay_container = document.querySelector(".container .overlay-container");
          const overlay = document.querySelector(".container .overlay-container .overlay");
          const signInForm = document.querySelector(".container .sign-in-form");
          const signUpForm = document.querySelector(".container .sign-up-form");
          overlay_container.style.transform = "translateX(0)";
          overlay.style.transform = "translateX(0)";
          signUpForm.classList.add("active");
          signInForm.classList.remove("active");
        };
   




 
  return (
    <section>
  <div class="container">
    <div class="form sign-in-form">
      <div class="wrapper">
        <form >
        <div style={{display:'flex' , align_items: 'center'}}>
          <img className='ml-10' src='photo/23.png' alt='' style={{width:"60px",height:"70px"}}/>
          <h1 className='ml-10'>Avocat</h1>
          </div>
          <input type="text" placeholder="Nom"/>
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirmer password"/>
          <button type="submit" className='ml-12'>Sign Up</button>

        </form>
      </div>
    </div>
    <div class="form sign-up-form active">
      <div class="wrapper">
        
        <form>
        <div style={{display:'flex' , align_items: 'center'}}>
          <img className='ml-10' src='photo/24.png' alt='' style={{width:"60px",height:"60px"}}/>
          <h1 className='ml-10'>Client</h1>
          </div>
          <input type="text" placeholder="Nom"  />
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email"  />
          <input type="password" placeholder="password"  />
          <input type="password" placeholder="confirmer password"/>
          <button type="submit" className='ml-12'>Sign Up</button>
        </form>
      </div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-left">

          <h1 className=' ml-20'>Êtes vous Avocat</h1>
          <button id="signInButton" onClick={handleSignInClick}>Cliquez ici</button>
        </div>
        <div class="overlay-right">
        

          <h1 className='ml-20'>Êtes vous Client</h1>
          <button id="signUpButton" onClick={handleSignUpClick}>Cliquez ici</button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default SignUpForm;
