import React from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
  // console.log(props.techs.map((t) => ));
  //   props.techs.map((t) => console.log(t));
  return (
    <div className="project-card">
      <div className="project-card-main">
        <img
          className="project-card-image"
          src={props.link}
          alt="project img"
        />
        <h3>{props.title}</h3>
      </div>
      <p className="portfolio-description">{props.description}</p>
      <div className="portfolio-link">
        {props.demo && (
          <a target="_blank" rel="noopener noreferrer" href={props.demo}>
            Demo
          </a>
        )}
      </div>
      <div className="techs-container">
        {props.techs.map((tech, i) => (
          <span key={tech + i}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
