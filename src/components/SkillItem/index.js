import React from 'react';
import './SkillItem.css';

const SkillItem = ({ logo, name }) => {
  return (
    <div className="skill-item">
      <img src={logo} alt={name} className="skill-item__logo" />
      <p className="skill-item__name">{name}</p>
    </div>
  );
};

export default SkillItem;
