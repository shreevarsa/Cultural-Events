import React, { useState } from "react"

import festpng from "../assets/fest.png";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setopenLinks] = useState(false);

  const toggleNavbar=() => {
    setopenLinks(!openLinks);

  }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          
            <img src={festpng} />
            <h4 className="topic"> Sangamam </h4>
            <div className="hiddenLinks">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Competition">Competition</NavLink>
              <NavLink to="/Register">Register</NavLink>

            </div>
        </div>
        <div className="rightSide">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/competition">Competition</NavLink>
          <NavLink to="/Register">Register</NavLink>
        <div></div>
          <HiMenu className="menu" onClick={toggleNavbar} />
          
        </div>
    </div>
  );
}

export default Navbar;



