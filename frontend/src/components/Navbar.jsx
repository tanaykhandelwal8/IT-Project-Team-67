import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{zIndex:"99", position:"relative"}}>
      <header>
        <Link to="resident-dashboard">Resident Dashboard</Link>
        <a> </a>
        <Link to="staff-dashboard">Staff Dashboard</Link>
        <a> </a>
        <Link to="add-resident"> Add New Resident</Link>
        <a> </a>
        <Link to="add-staff">Add New Staff</Link>
        <a> </a>
        <Link to="community-corner">Community Corner</Link>
        <Link to="/"style={{float:'right'}}>Log Out</Link>
      </header>
      <br></br>
      <br></br>
      <br></br>
    </nav>
  );
}

export default Navbar;