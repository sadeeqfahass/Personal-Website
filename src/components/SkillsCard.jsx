import React from "react";

function SkillsCard(props) {
  return (
    <div className="skills-card">
      <i className={props.icon}></i>
      <p className="skill-title">{props.title}</p>
    </div>
  );
}

export default SkillsCard;
