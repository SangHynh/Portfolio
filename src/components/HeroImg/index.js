import React from "react";
import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import Typewriter from "../../utils/Typewriter";

const HeroImg = () => {
  return (
    <div className="hero__container">
      <div className="hero__mask"></div>
      <div className="hero__content">
        <Typewriter text={"HELLO, I'M HUYNH VAN SANG"} duration={2000} delay={1000} className="sub-title"></Typewriter>
        <p className="title">Software Intern</p>
        <br />
        <Link to="/project" className="button primary-button">
          Projects
        </Link>
        <Link to="/contact" className="button secondary-button">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HeroImg;
