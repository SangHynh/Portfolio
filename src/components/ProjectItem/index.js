import React from "react";
import "./ProjectItem.css";
import SkillItem from '../SkillItem';

const ProjectItem = ({ 
  imageSrc, 
  projectName = "Default Project Name", 
  subTitle = "Default Sub Title", 
  description = "Default Description", 
  teamSize = "Unknown", 
  role = "Unknown Role", 
  time,
  techStacks = [], 
  previewLink, 
  sourceLink, 
  additionalContent 
}) => {
  return (
    <div className="project-item__container">
      <img src={imageSrc} loading="lazy" alt="Project" />
      <div className="project-item__content">
        <h1>{projectName}</h1>
        <h2>{subTitle}</h2>
        <p><strong>Detail:</strong> {description}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Team size:</strong> {teamSize}</p>
        <p><strong>Role:</strong> {role}</p>
        {additionalContent && (
          <div className="additional-content">
            {additionalContent}
          </div>
        )}
        <div className="project-item__links">
          {previewLink && (
            <a href={previewLink} target="_blank" rel="noopener noreferrer" className="btn">Preview</a>
          )}
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
          )}
        </div>
        <div className="tech-stack__list">
          {techStacks.map((skill, index) => (
            <SkillItem key={index} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
