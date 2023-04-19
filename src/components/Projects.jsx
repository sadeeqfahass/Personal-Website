import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title-con">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="projects-container">
        <ProjectCard 
            img="furniture-company.png"
            title = "Youtube Clone"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Landing Page"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "HTML"
            tech2 = "CSS"
            tech3 = "JS"
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Weather App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "E-Commerce Website"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Notes App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Movie App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
      </div>
    </div>
  );
}

export default Projects;
