import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title-con">
        <h1 className="section-title">Get In Touch</h1>
      </div>
      <div className="contact-container">
        <div className="address">
          <i className="fa-solid fa-location-dot"></i>
          <p>Kano State, Nigeria</p>
        </div>
        <div className="mail">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:sadeeqfhassan@gmail.com">sadeeqfhassan@gmail.com</a>
        </div>
        <div className="phone">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+2348066792454">+234 8066 792 454</a>
        </div>
        <div className="social">
            <a href="https://github.com/sadeeqfahass"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/abubakar-farouq-b24b2b259/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/sadeeq_farouq"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
