import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../App.css"

function Navbar() {
  return (
    <nav className="Font">
      <Link to="resident-dashboard">Resident Dashboard</Link>
      <a> </a>
      <Link to="add-resident"> Add New Resident</Link>
      <a> </a>
      <Link to="add-staff">Add New Staff</Link>
      <Link to="/"style={{float:'right'}}>Log Out</Link>
          
    </nav>
  );
}

export default Navbar;