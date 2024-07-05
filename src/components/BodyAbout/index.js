import Typewriter from "../../utils/Typewriter";
import "./BodyAboutStyles.css";
import React, { useState, useEffect } from "react";
import HeroImg from "../../assets/img/bocchi.png";
import "../../index.css";

const BodyAbout = () => {
  const [animationQuote, setAnimationQuote] = useState(false);
  const [animationCv, setAnimationCv] = useState(false);

  // Animation for quote
  const fadeInUpQuote = () => {
    const viewportHeight = window.innerHeight;
    const positionToTrigger = viewportHeight * 0.6;
    window.scrollY >= positionToTrigger
      ? setAnimationQuote(true)
      : setAnimationQuote(false);
  };

  // Animation for cv
  const fadeInUpCV = () => {
    const viewportHeight = window.innerHeight;
    const positionToTrigger = viewportHeight * 1.2;
    window.scrollY >= positionToTrigger
      ? setAnimationCv(true)
      : setAnimationCv(false);
  };

  window.addEventListener("scroll", fadeInUpQuote);
  window.addEventListener("scroll", fadeInUpCV);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", fadeInUpQuote);
      window.removeEventListener("scroll", fadeInUpCV);
    };
  }, []);

  return (
    <div className="about__container">
      <div className="about__hero">
        <img src={HeroImg} alt="This is not me" />
        <div>
          <Typewriter
            className="green-text text-expert"
            text={"About me"}
            duration={1500}
          />
          <ul>
            <li className="blue-text">
              Fourth-year Software Engineering student with over 6 months of
              front-end software development experience
            </li>
            <li className="pink-text">
              Proficient in HTML5, CSS3, JavaScript ES6
            </li>
            <li className="pink-text">
              Understanding of Redux architecture, React Component, Functional
              programming
            </li>
            <li className="pink-text">
              Experienced in designing responsive interfaces with basic
              animations
            </li>
            <li className="pink-text">
              Familiar with REST API, JSON, Socket, JWT
            </li>
            <li className="pink-text">
              Basic knowledge of Node.js, SQL/NoSQL database, cloud services
            </li>
            <li>Proactive attitude and eagerness for continuous improvement</li>
          </ul>
        </div>
      </div>
      <div
        className={
          animationQuote ? "about__quote about__quote--active" : "about__quote"
        }
      >
        <p className="symbol">“</p>
        <p className="quote">Lemme save the world</p>
        <p className="sub-content">-The best quote</p>
      </div>
      <div
        className={animationCv ? "about__cv about__cv--active " : "about__cv"}
      >
        {/* Header cv */}
        <div className="cv__header">
          <div className="left">
            <h1 className="green-text">Huynh Van Sang</h1>
            <h2 className="text-expert">Front-end Intern</h2>
          </div>
          <div className="right">
            <p className="pink-text">
              Phone: <span>{process.env.REACT_APP_PHONE}</span>
            </p>
            <p className="pink-text">
              Email: <span>{process.env.REACT_APP_EMAIL}</span>
            </p>
            <p className="pink-text">
              Address: <span>{process.env.REACT_APP_ADDRESS}</span>
            </p>
            <p className="pink-text">
              Github:
              <a href={process.env.REACT_APP_GITHUB} className="cyan-text">
                {process.env.REACT_APP_GITHUB}
              </a>
            </p>
          </div>
        </div>
        {/* Objectives cv */}
        <div className="cv__objective">
          <h3 className="comment-text">{"//CAREER OBJECTIVES"}</h3>
          <p>
            Apply learned knowledge to participate in and contribute to
            practical projects. Learn further from experienced professionals.
            Enhance skills in UX/UI design, APIs, security, and performance.
            Gather more knowledge in networking, operating systems, databases...
            related to backend. Aim to become a full-stack developer in the
            future.
          </p>
        </div>
        {/* Grid cv {left + right} */}
        <div className="cv__grid">
          <div className="cv__left">
            {/* Skill cv */}
            <div className="cv__skill">
              <h3 className="comment-text">{"//SKILLS"}</h3>
              {/* frontend */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">frontEnd = </span>
                <span className="yellow-text">{"["}</span>
              </p>
              <ul>
                <li className="cyan-text">HTML5, CSS3,</li>
                <li className="cyan-text">JavaScript, ES6,</li>
                <li className="cyan-text">React</li>
              </ul>
              <p>
                <span className="yellow-text">{"]"}</span>
              </p>
              {/* backend */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">backEnd = </span>
                <span className="yellow-text">{"["}</span>
              </p>
              <ul>
                <li className="cyan-text">NodeJS, ExpressJS,</li>
                <li className="cyan-text">MongoDB</li>
              </ul>
              <p>
                <span className="yellow-text">{"]"}</span>
              </p>
              {/* tools */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">tools = </span>
                <span className="yellow-text">{"["}</span>
              </p>
              <ul>
                <li className="cyan-text">Github, Postman, </li>
                <li className="cyan-text">Figma, Canva </li>
              </ul>
              <p>
                <span className="yellow-text">{"]"}</span>
              </p>
              {/* english */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">english = </span>
                <span className="orange-text">
                  "Basic communication and documents reading."
                </span>
              </p>
            </div>
          </div>
          <div className="cv__right">
            {/* Education cv */}
            <div className="cv__education">
              <h3 className="comment-text text-advanced">{"//EDUCATION"}</h3>
              <p>2020 - Present </p>
              <h4 className="pink-text text-intermediate">
                Industrial University of HCMC - IUH
              </h4>
              <p className="cyan-text">Specialization: Software Engineering</p>
            </div>
            {/* projects */}
            <div className="cv__project">
              <h3 className="comment-text text-advanced">{"//PROJECTS"}</h3>
              <ul>
                <li>
                  <h4 className="pink-text text-intermediate">
                    Asgy - Real-time chat web
                  </h4>
                  <p className="blue-text">
                    Project timeline: <span>Jan 2024 - May 2024</span>
                  </p>
                  <p className="blue-text">
                    {"Preview: "}
                    <a
                      href="https://youtu.be/8bUs-YII4BY"
                      className="link cyan-text"
                    >
                      YouTube Link
                    </a>
                  </p>
                  <p className="blue-text">
                    {"Source: "}
                    <a
                      href="https://github.com/JiaG293/asgy.git"
                      className="link cyan-text"
                    >
                      GitHub Link
                    </a>
                  </p>
                  <p>
                    <span className="blue-text">Team size: </span>2
                  </p>
                  <p>
                    <span className="blue-text">Position: </span>
                    Front-end developer
                  </p>
                  <p>
                    <span className="blue-text">Description: </span>
                    This project is a real-time chat application deployed on AWS
                    EC2. It allows users to log in, register, engage in
                    one-on-one and group chats, add friends, manage groups, and
                    send files and photos.
                  </p>
                  <p className="cyan-text">
                    <span className="blue-text">Technologies: </span>
                    MongoDB, ExpressJS, ReactJS, NodeJS, Socket.io, JWT, AWS S3,
                    AWS EC2, Google Cloud
                  </p>
                </li>
                <li>
                  <h4 className="pink-text text-intermediate">
                    Personal Portfolio
                  </h4>
                  <p className="blue-text">
                    Project timeline: <span>June 30, 2024 - present.</span>
                  </p>
                  <p className="blue-text">
                    {"Preview: "}
                    <a
                      href="https://sanghynhdev.netlify.app/"
                      className="link cyan-text"
                    >
                      Vercel Link
                    </a>
                  </p>
                  <p className="blue-text">
                    {"Source: "}
                    <a
                      href="https://github.com/SangHynh/Portfolio"
                      className="link cyan-text"
                    >
                      GitHub Link
                    </a>
                  </p>
                  <p>
                    <span className="blue-text">Description: </span>
                    This is my self-learning project aimed to review and improve
                    my skills in writing clean code and developing responsive
                    websites. This project is currently under development.
                  </p>
                  <p className="cyan-text">
                    <span className="blue-text">Technologies: </span>
                    ReactJS, CSS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAbout;
