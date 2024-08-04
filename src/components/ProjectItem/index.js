import React, { useEffect, useRef } from "react";
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
  const projectRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div className="project-item__container" ref={projectRef}>
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
