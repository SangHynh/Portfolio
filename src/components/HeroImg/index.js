import React from "react";
import "./HeroImgStyles.css";
import IntroImg from "../../assets/img/bocchi.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero__container">
      <div className="hero__mask">
        {/* <img className="intro-img" src={IntroImg} alt="IntroImage" /> */}
      </div>
      <div className="hero__content">
        <p>
          HELLO, I'M HUYNH VAN SANG
          <h1>Front-end Developer</h1>
          <Link to="/project" className="button primary-button">Projects</Link>
          <Link to="/contact" className="button secondary-button">Contact</Link>
        </p>
      </div>
    </div>
  );
};

export default HeroImg;
