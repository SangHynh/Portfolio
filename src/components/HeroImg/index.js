import React from "react";
import "./HeroImgStyles.css";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero__container">
      <div className="hero__mask">
        {/* <img className="intro-img" src={IntroImg} alt="IntroImage" /> */}
      </div>
      <div className="hero__content">
          <p>HELLO, I'M HUYNH VAN SANG</p>
          <h1>Front-end Developer</h1>
          <Link to="/project" className="button primary-button">Projects</Link>
          <Link to="/contact" className="button secondary-button">Contact</Link>
      </div>
    </div>
  );
};

export default HeroImg;
