import React from "react";
import "./Experience.css";
import skills from "../../Data/Skills";
import experience from "../../Data/Experience";

const Experience = () => {
  return (
    <section className="experienceSection" id="experience">
      <div className="experienceContent">
        <h2 className="experienceTitle">Experience</h2>
        {experience.map((exp,id)=>{
          return (
            <div key={id} className="expContent">
              <h3 className="expRole">{`${exp.role}, ${exp.organisation}`}</h3>
              <p className="expDate">{`${exp.startDate} - ${exp.endDate}`}</p>
              <p className="expDetails">{exp.experiences}</p>
            </div>
          );
        })}
      </div>
      <div className="skillsContent">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skills">
      {skills.map((skill,id)=>{
        return (
          <div key={id} className="skillContent">
            <div className="skillImageContainer">
              <img src={skill.imageSrc} alt="" className="skillLogo" />
            </div>
            <p className="skillTitle">{skill.title}</p>
          </div>
        );
      })}
      </div>
      </div>
    </section>
  );
};

export default Experience;
