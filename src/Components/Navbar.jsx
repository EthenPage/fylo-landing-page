import React from "react";
import logo from "../Assets/images/logo.svg";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="wrapper">
        <img src={logo} alt="" />
        <ul className="menu">
          <li><a href="#">Features</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
