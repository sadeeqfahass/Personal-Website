import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="title-con">
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-content">
        <p>
          I am Abubakar (Sadeeq) Farouq, an enthusiastic Frontend developer from in Kano state, Nigeria. I find joy in writing code and in the process of building beautiful websites and web applications that solve real-world problems and provide exceptional user experiences. <br /> I hold a BSc in Computer Systems and Information Technology,  and love to share my knowledge with others. Aside being a Frontend developer, I derive great satisfaction from helping people learn to code and empowering them to create amazing digital solutions.
        </p>
      </div>
      <div className="btn">
        <a href="https://drive.google.com/file/d/1oFeCP7JYpDRY9OBnSaiqmu80b08GoVbO/view?usp=drive_link" target="_blank">Download Resume</a>
      </div>
    </div>
  );
}

export default About;
