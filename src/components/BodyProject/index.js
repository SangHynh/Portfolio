import React from "react";
import "./BodyProject.css";
import ProjectItem from "../ProjectItem";

const BodyProject = () => {
  return (
    <div className="project__container">
      <div className="project__hero">
        <h1>Projects</h1>
      </div>
      <ProjectItem/>
    </div>
  );
};

export default BodyProject;
