import React from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import Works from "../Pages/Works";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="logo" id="logo">
        <h2 className="LogoH2">
          Dipan <span>Sarkar</span>{" "}
        </h2>
        <h2>
          Dipan <span>Sarkar</span>{" "}
        </h2>
      </div>

      <ul className="navList">
        <li className="navItems">
          <Link to="/home">Home </Link> <Link to="/home">Home</Link>
        </li>
        <li className="navItems">
          <Link to="/resume">Resume </Link> <Link to="/resume">Resume</Link>
        </li>
        <Link to="/works"> 
        <li className="navItems">
          <p>Works </p> <p>Works</p>
        </li>
        </Link>
        
        <li className="navItems">
          <p>Contacts </p> <p>Contacts</p>
        </li>
        {/* <li className="navItems">Resume</li>
    <li className="navItems">Works</li>
    <li className="navItems">Contacts</li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
