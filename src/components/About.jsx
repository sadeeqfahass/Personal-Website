import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="title-con">
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-content">
        <p>
          I am Abubakar (Sadeeq) Farouq, an enthusiastic Frontend developer from
          Kano state, Nigeria. I find joy in writing code and building beautiful
          websites and web applications that solve real-world problems and
          provide exceptional user experiences. <br /> I hold a BSc in Computer
          Systems and Information Technology, and love to share my knowledge
          with others. Aside being a Frontend developer, I derive great
          satisfaction from helping people learn to code and empowering them to
          create amazing digital solutions.
        </p>
      </div>
      <div className="btn">
        <a
          href="https://drive.google.com/file/d/11JBPbpScyc58dcGP8_yWW8o2Q0zxQiNs/view?usp=drive_link"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
