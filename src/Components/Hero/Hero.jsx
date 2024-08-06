import React from "react";
import "./Hero.css";
import hero_icon from "../../assets/heroIcon.png";
import my_resume from "../../assets/Aslam_Resume.pdf";

const Hero = () => {
  return (
    <section className="heroSection" id="home">
      <div className="heroContent">
        <h1 className="heroTitle">I'm Mohammed Aslam</h1>
        <p className="heroDescription">
        Excited to leverage my technical and leadership skills in a full-time web development role, I'm eager to contribute to innovative solutions and grow within a dynamic tech company. Let's connect to explore opportunities in web development.
        </p>
        <div className="heroBtns">
          <a href={my_resume} className="heroBtn" target="_blank">
            My Resume
          </a>
          <a href="#contact" className="heroBtn">
            Contact
          </a>
        </div>
      </div>
      <img src={hero_icon} alt="" className="heroIcon" />
    </section>
  );
};

export default Hero;
