import React from "react";
import logo from '/Residencely-1.png';

function Navbar() {
  return (
    <div>
      <img src={logo} width={100} height={100} alt="Residencely" />
      <a href="/" target="_blank" style={{"float":"right"}}>Log out</a>
    </div>
  );
}

export default Navbar;