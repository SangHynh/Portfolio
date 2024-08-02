import React from "react";
import "./BodyProject.css";
import ProjectItem from "../ProjectItem";
import { skills } from "../../assets/data/skills";

// Mảng kỹ năng cụ thể cho từng dự án
const techStacks1 = skills.filter((skill) =>
  ["MongoDB", "Express.js", "Node.js", "React", "AWS"].includes(skill.name)
);

const techStacks2 = skills.filter((skill) =>
  ["React", "Tailwind CSS"].includes(skill.name)
);

const techStacks3 = skills.filter((skill) =>
  ["React", "Express.js", "Node.js", "MySQL"].includes(skill.name)
);

const techStacks4 = skills.filter((skill) =>
  ["React"].includes(skill.name)
);

const BodyProject = () => {
  return (
    <div className="project__container">
      <div className="project__hero">
        <h1>Projects</h1>
      </div>
      <ProjectItem
        imageSrc={require("../../assets/img/asgy.gif")}
        projectName="ASGY"
        subTitle="Real-time chat web"
        description="Developed a chat app with real-time messaging and user authentication using React.js, Express.js, Socket.io, JWT, MongoDB, and AWS S3."
        teamSize={2}
        role="Frontend Developer"
        time={"Jan 2024 – May 2024"}
        techStacks={techStacks1}
        previewLink="https://www.youtube.com/watch?v=8bUs-YII4BY"
        sourceLink="https://github.com/JiaG293/asgy"
      />
      <ProjectItem
        imageSrc={require("../../assets/img/nextflex.gif")}
        projectName="Nextflex"
        subTitle="Movie trailer web"
        description="Developed a movie streaming web app using React, Vite, and Tailwind CSS. Integrated TMDB API for movie data, implemented search functionality, and deployed on Netlify."
        teamSize={1}
        role="Frontend Developer"
        time={"Aug 2024 - Present"}
        techStacks={techStacks2}
        previewLink="https://nextflex.netlify.app/"
        sourceLink="https://github.com/SangHynh/Netflex"
      />
      <ProjectItem
        imageSrc={require("../../assets/img/checkscore.gif")}
        projectName="High School Exam Scores 2024"
        subTitle="Check score website"
        description="Built a web app for high school exam scores with search functionality. Used MySQL, Express.js, and React.js, and deployed on Netlify."
        teamSize={1}
        role="Fullstack Developer"
        time={"Jul 2024"}
        techStacks={techStacks3}
        previewLink="https://ket-qua-thptqg-2024.netlify.app/"
        sourceLink="https://github.com/SangHynh/highschool-exam-scores-2024"
      />
      <ProjectItem
        imageSrc={require("../../assets/img/Portfolio.gif")}
        projectName="Personal Portfolio"
        subTitle=""
        description="Created a personal portfolio site with React to showcase projects and skills."
        teamSize={1}
        role="Frontend Developer"
        time={"Jul 2024 - Present"}
        techStacks={techStacks4}
        previewLink="https://sanghynhdev.netlify.app"
        sourceLink="https://github.com/SangHynh/portfolio"
      />
    </div>
  );
};

export default BodyProject;
