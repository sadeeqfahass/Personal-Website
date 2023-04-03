import React from "react";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="title-con">
        <h1 className="section-title">Skills</h1>
      </div>
      <div className="skills-container">
        <SkillsCard 
            icon="fa-brands fa-html5"
            title="HTML"
        />
        <SkillsCard 
            icon="fa-brands fa-css3"
            title="CSS"
        />
        <SkillsCard 
            icon="fa-brands fa-square-js"
            title="Javascript"
        />
        <SkillsCard 
            icon="fa-brands fa-react"
            title="React"
        />
        <SkillsCard 
            icon="fa-brands fa-sass"
            title="Sass"
        />
        <SkillsCard 
            icon="fa-brands fa-bootstrap"
            title="Bootsrap"
        />
        <SkillsCard 
            icon="fa-brands fa-square-git"
            title="Version Control"
        />
      </div>
    </div>
  );
}

export default Skills;
