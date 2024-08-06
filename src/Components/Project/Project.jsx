import React from "react";
import "./Project.css";
import projects from "../../Data/Project";

const Project = () => {
  return (
    <section className="projectContainer" id="project">
      <h2 className="projectContainerTitle">Projects</h2>
      <div className="projectCardContainer">
        {projects.map((project, id) => {
          return (
            <div className="projectCard" key={id}>
              <img src={project.image} alt="" className="projectImage" />
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">
                {project.description}
              </p>
              <ul className="projectSkills">
                {project.skills.map((skill, id)=>{
                  return <li className="projectSkill" key={id}>{skill}</li>
                })}
              </ul>
              <div className="projectLinks">
                <a href={project.demo} className="projectLink" target="_blank">Demo</a>
                <a href={project.source} className="projectLink" target="_blank">Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
