import "./FooterStyles.css";
import React from "react";
import { FaHome as HomeIcon } from "react-icons/fa";
import { FaPhone as PhoneIcon } from "react-icons/fa";
import { FaMailBulk as EmailIcon } from "react-icons/fa";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";

const Footer = () => {
  const urlFacebook = process.env.REACT_APP_FACEBOOK;
  const urlLinkedin = process.env.REACT_APP_LINKEDIN;
  const urlGithub = process.env.REACT_APP_GITHUB;

  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="left">
          <div className="location">
            <HomeIcon
              size={30}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <div>
              <p> {process.env.REACT_APP_ADDRESS}</p>
              <p> {process.env.REACT_APP_COUNTRY}</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <PhoneIcon
                size={30}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              <span> {process.env.REACT_APP_PHONE}</span>
            </h4>
          </div>
          <div className="email">
            <h4>
              <EmailIcon
                size={30}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              <span>{process.env.REACT_APP_EMAIL}</span>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I'm a student web intern and front-end developer, eager to gain
            practical experience, enhance skills, and explore opportunities.
          </p>
          <div className="social">
            <a target="_blank" href={urlFacebook}>
              <FacebookIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a target="_blank" href={urlGithub}>
              <GithubIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a target="_blank" href={urlLinkedin}>
              <LinkedinIcon
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;