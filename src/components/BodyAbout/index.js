import React, { useEffect } from "react";
import Typewriter from "../../utils/Typewriter";
import "./BodyAboutStyles.css";
import "../../index.css";
import HeroImg from "../../assets/img/bocchi.png";
import IUHLogo from "../../assets/img/Logo-IUH.jpg";
import SkillItem from "../SkillItem";
import { skills, tools } from "../../assets/data/skills";
const BodyAbout = () => {
  /* animation when scroll */

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll(
      ".about__overview, .about__education, .about__skill"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="about__container">
      <div className="about__hero">
        <Typewriter
          text={"About me"}
          duration={2000}
          className="about__title"
        />
      </div>
      {/* Overview */}
      <div className="about__overview">
        <div className="image-overlay"></div>
        <img src={HeroImg} alt="This is Bocchi" loading="lazy" />
        <div className="about__overview-content">
          <h2>
            I'm a fourth-year student seeking an internship to apply my skills
            and gain real-world experience.
          </h2>
          <br />
          <div className="about__links">
            <a
              href={process.env.REACT_APP_CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume 1
            </a>
            <a
              href={process.env.REACT_APP_SUB_CV}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume 2
            </a>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="about__education">
        <div className="about__education-content">
          <h2>Education</h2>
          <p>
            <strong>Institution:</strong> IUH - Industrial University of Ho Chi
            Minh City
          </p>
          <p>
            <strong>Duration:</strong> 2020 – Present
          </p>
          <p>
            <strong>Specialization:</strong> Software Engineering
          </p>
        </div>
        <img src={IUHLogo} alt="IUH" loading="lazy" />
      </div>
      {/* Skills */}
      <div className="about__skill">
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillItem name={skill.name} logo={skill.logo} key={index} />
          ))}
        </div>
        <h1>Tools</h1>
        <div className="skills-container">
          {tools.map((tool, index) => (
            <SkillItem name={tool.name} logo={tool.logo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyAbout;
