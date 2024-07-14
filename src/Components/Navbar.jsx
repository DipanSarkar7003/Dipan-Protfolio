import React from "react";

function Navbar() {
  return (
    <nav className="navBar">

      <div className="logo" id="logo">
        <h2 className="LogoH2">Dipan <span>Sarkar</span> </h2>
        <h2>Dipan <span>Sarkar</span> </h2>
      </div>

      <ul className="navList">
        <li className="navItems">
          <p>Home </p> <p>Home</p>
        </li>
        <li className="navItems">
          <p>Resume </p> <p>Resume</p>
        </li>
        <li className="navItems">
          <p>Works </p> <p>Works</p>
        </li>
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
