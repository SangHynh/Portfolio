import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </div>
  );
};

export default Navbar;
