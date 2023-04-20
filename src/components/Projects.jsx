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
            preview="https://sadeeqfahass.github.io/Fictional-Furniture-Company/"
            github="https://github.com/sadeeqfahass/Fictional-Furniture-Company"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Landing Page"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            preview="https://sadeeqfahass.github.io/Fictional-Furniture-Company/"
            github="https://github.com/sadeeqfahass/Fictional-Furniture-Company"
            tech1 = "HTML"
            tech2 = "CSS"
            tech3 = "JS"
        />
        <ProjectCard 
            img="weather-app.png"
            title = "Weather App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            preview="https://sadeeqfahass.github.io/Weather-App/"
            github="https://github.com/sadeeqfahass/Weather-App"
            tech1 = "HTML"
            tech2 = "CSS"
            tech3 = "JS"
            tech4 = "API"
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "E-Commerce Website"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            preview="https://sadeeqfahass.github.io/Fictional-Furniture-Company/"
            github="https://github.com/sadeeqfahass/Fictional-Furniture-Company"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Notes App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            preview="https://sadeeqfahass.github.io/Fictional-Furniture-Company/"
            github="https://github.com/sadeeqfahass/Fictional-Furniture-Company"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
        <ProjectCard 
            img="furniture-company.png"
            title = "Movie App"
            description1 = "A clone of the official youtube web "
            description2 = "app, using the youtube API"
            preview="https://sadeeqfahass.github.io/Fictional-Furniture-Company/"
            github="https://github.com/sadeeqfahass/Fictional-Furniture-Company"
            tech1 = "React"
            tech2 = "CSS"
            tech3 = ""
        />
      </div>
    </div>
  );
}

export default Projects;
