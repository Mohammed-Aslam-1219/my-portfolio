import React from "react";
import "./About.css";
import about_icon from "../../assets/aboutIcon.png";
import cursorIcon from "../../assets/cursorIcon.png";
import serverIcon from "../../assets/serverIcon.png";
import uiIcon from "../../assets/uiIcon.png";

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <h2 className="aboutTitle">About Me!</h2>
      <div className="aboutContent">
        <img src={about_icon} alt="" className="aboutIcon" />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={cursorIcon} alt="" className="aboutItemImg" />
            <div className="aboutItemText">
              <h3>Professional Experience</h3>
              <p>
              With nearly 3 years in the BPO industry, I've progressed from a Process Associate to a Team Lead, where I successfully managed teams and ensured customer satisfaction.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={serverIcon} alt="" className="aboutItemImg" />
            <div className="aboutItemText">
              <h3>Technical Expertise</h3>
              <p>
              After completing a full-stack development course, I gained hands-on experience during a six-month internship, mastering technologies like HTML, CSS, JavaScript, React, Python, and Node.js.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={uiIcon} alt="" className="aboutItemImg" />
            <div className="aboutItemText">
              <h3>Career Goals</h3>
              <p>
              I'm eager to transition into a full-time web development role, applying my skills to innovative projects and growing within a dynamic tech company.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
