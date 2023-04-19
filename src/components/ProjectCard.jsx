import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="top">
        <img src={props.img} alt="" />
      </div>
      <div className="bottom">
        <h2 className="title">{props.title}</h2>
        <div className="desc">
          <p className="">
            {props.description1} <br /> {props.description2}
          </p>
        </div>
        <div className="icons">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <div className="tech">
          <p>{props.tech1}</p>
          <p>{props.tech2}</p>
          <p>{props.tech3}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
