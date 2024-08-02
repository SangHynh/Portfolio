import React, { useEffect } from "react";
import Typewriter from "../../utils/Typewriter";
import "./BodyAboutStyles.css";
import "../../index.css";
import HeroImg from "../../assets/img/bocchi.png";
import IUHLogo from "../../assets/img/Logo-IUH.jpg";
import SkillItem from "../SkillItem";

const BodyAbout = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/java.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/mysql.svg" }
  ];

  const tools = [
    { name: "Figma", logo: "https://skillicons.dev/icons?i=figma" },
    { name: "Postman", logo: "https://skillicons.dev/icons?i=postman" },
    { name: "Github", logo: "https://skillicons.dev/icons?i=github" },
    { name: "VSCode", logo: "https://skillicons.dev/icons?i=vscode" },
    { name: "Eclipse", logo: "https://skillicons.dev/icons?i=eclipse" }
  ];


  /* animation when scroll */

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll('.about__overview, .about__education, .about__skill');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
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
        <img src={HeroImg} alt="This is Bocchi" />
        <div className="about__overview-content">
          <h2>
            I'm a fourth-year student seeking an internship to apply my skills
            and gain real-world experience.
          </h2>
        </div>
      </div>
      {/* Education */}
      <div className="about__education">
        <div className="about__education-content">
          <h2>Education</h2>
          <p>
            <strong>Institution:</strong> IUH - Industrial University of Ho Chi Minh City
          </p>
          <p>
            <strong>Duration:</strong> 2020 – Present
          </p>
          <p>
            <strong>Specialization:</strong> Software Engineering
          </p>
        </div>
        <img src={IUHLogo} alt="IUH" />
      </div>
      {/* Skills */}
      <div className="about__skill">
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillItem
              name={skill.name}
              logo={skill.logo}
              key={index}
            />
          ))}
        </div>
        <h1>Tools</h1>
        <div className="skills-container">
          {tools.map((tool, index) => (
            <SkillItem
              name={tool.name}
              logo={tool.logo}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyAbout;
