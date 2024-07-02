import "./BodyAboutStyles.css";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const BodyAbout = () => {
  return (
    <div className="about__container">
      {/* <div className="about__mask"> */}
      <PerfectScrollbar  className="about__cv">
        {/* Header cv */}
        <div className="cv__header">
          <div className="left">
            <h1 className="green-text">Huynh Van Sang</h1>
            <h2>Front-end Intern</h2>
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
              Github: <span>{process.env.REACT_APP_GITHUB}</span>
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
                <li className="cyan-text">JavaScript, ES6</li>
                <li className="cyan-text">React</li>
                <span className="yellow-text">{"]"}</span>
              </ul>
              {/* backend */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">backEnd = </span>
                <span className="yellow-text">{"["}</span>
              </p>
              <ul>
                <li className="cyan-text">NodeJS, ExpressJS,</li>
                <li className="cyan-text">MongoDB</li>
                <span className="yellow-text">{"]"}</span>
              </ul>
              {/* tools */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">tools = </span>
                <span className="yellow-text">{"["}</span>
              </p>
              <ul>
                <li className="cyan-text">Github, Postman, </li>
                <li className="cyan-text">Figma, Canva </li>
                <span className="yellow-text">{"]"}</span>
              </ul>
              {/* english */}
              <p>
                <span className="pink-text">let </span>
                <span className="blue-text">english = </span>
                <p className="orange-text">
                  "Basic communication and reading documents."
                </p>
              </p>
            </div>
          </div>
          <div className="cv__right">
            {/* Education cv */}
            <div className="cv__education">
              <h3 className="comment-text">{"//EDUCATION"}</h3>
              <p>2020 - Present </p>
              <h4 className="pink-text">Industrial University of HCMC - IUH</h4>
              <p className="cyan-text">Specialization: Software Engineering</p>
            </div>
            {/* projects */}
            <div className="cv__project">
              <h3 className="comment-text">{"//PROJECTS"}</h3>
              <ul>
                <li>
                  <h4 className="pink-text">Asgy - Real-time chat web</h4>
                  <p className="blue-text">
                    Project timeline: <span>from Jan 2024 to May 2024</span>
                  </p>
                  <p className="blue-text">
                    {"Preview: "}
                    <a
                      href="https://youtu.be/8bUs-YII4BY"
                      className="link cyan-text"
                    ></a>
                  </p>
                  <p className="blue-text">
                    {"Source: "}
                    <a
                      href="https://github.com/JiaG293/asgy.git"
                      className="link cyan-text"
                    ></a>
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
                  <h4 className="pink-text">Personal Portfolio</h4>
                  <p className="blue-text">
                    Project timeline: <span>from June 30, 2024 to present.</span>
                  </p>
                  <p className="blue-text">
                    {"Preview: "}
                    <a
                      href="https://portfolio-one-sable-99.vercel.app/"
                      className="link cyan-text"
                    ></a>
                  </p>
                  <p className="blue-text">
                    {"Source: "}
                    <a
                      href="https://github.com/SangHynh/Portfolio"
                      className="link cyan-text"
                    ></a>
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
      </PerfectScrollbar>
      {/* </div> */}
    </div>
  );
};

export default BodyAbout;
