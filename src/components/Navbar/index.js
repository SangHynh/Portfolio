import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from "react";
import { RxHamburgerMenu as HamburgerMenu } from "react-icons/rx";
import { FaTimes as CloseMenu } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar__container">
      <Link to="/">
        <h1>
          Portfol<span>io</span>
        </h1>
      </Link>
      <ul className={click ? "navbar__list active":"navbar__list"}>
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__item">
          <Link to="/project">Project</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar__hamburger">
        {click ? (
          <CloseMenu
            size={20}
            style={{ color: "white" }}
            onClick={handleClick}
          ></CloseMenu>
        ) : (
          <HamburgerMenu
            size={20}
            style={{ color: "white" }}
            onClick={handleClick}
          ></HamburgerMenu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
