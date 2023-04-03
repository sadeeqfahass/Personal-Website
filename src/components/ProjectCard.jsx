import React from "react";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="top">
        <img src="https://picsum.photos/id/237/350/200" alt="" />
      </div>
      <div className="bottom">
        <h2>Project title</h2>
        <div className="icons">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
