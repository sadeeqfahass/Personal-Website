import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="title-con">
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-content">
        <p>
          I am Abubakar (Sadeeq) Farouq, an enthusiastic Frontend developer based in Kano, Nigeria. I have a deep love for writing code and I find joy in the process of building beautiful websites and web applications that solve real-world problems and provide exceptional user experiences. <br /> I hold a BSc in Computer Information System and love to share my knowledge with others. Aside being a Frontend developer, I derive great satisfaction from helping people learn to code and empowering them to create amazing digital solutions.
        </p>
      </div>
      <div className="btn">
        <a href="https://drive.google.com/file/d/1P-dTu6Fj2XGk2kRvVAv_aakobU475s6W/view?usp=sharing" target="_blank">Download Resume</a>
      </div>
    </div>
  );
}

export default About;
