import React from "react";
import {Link} from 'react-router-dom';
import logo from "../assets/logoFlat.png"
import "../Navbar.css"

function Navbar() {
  return (
    <nav style={{zIndex:"99",position:"fixed"}}>
      <header className="Navbar">
        <img src={logo} className="Logo"></img>
        <Link to="/" className="Logout">Log Out</Link>
      </header>
    </nav>
  );
}

export default Navbar;