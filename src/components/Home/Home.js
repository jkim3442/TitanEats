import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TitanEats</h1>
        <button><Link to="/signin">Sign-In</Link></button>
      </header>
    </div>
  );
} 

export default Signin;
