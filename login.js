import React from "react";
import './App.css';


const text2=()=>{
    return( 
        
      <body className="bodys">
      <div id="cards">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div class="underline-title"></div>
          </div>
          <form method="post" className="foorm">
            <label for="user-email" style={{padding_top: '13px'}}> Email </label>
            <input
              id="user-email"
              className="foorm-content"
              name="email"
              autocomplete="on"
              required
            />
            <div className="foorm-border"></div>
            <label for="user-password" style={{padding_top: "22px"}}>Password </label>
            <input
              id="user-password"
              className="foorm-content"
              name="password"
              required
            />
            <div className="foorm-border"></div>
            <button className="submit-btn" name="submit" value="LOGIN">LOGIN</button>
          </form>
        </div>
      </div>
    </body>
    )
}
 
export default text2;