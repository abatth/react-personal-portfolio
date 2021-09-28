import React from "react";
import ProjectItem from "./ProjectItem";
import "./PortfolioTwo.css";
import todoimg from "../images/to-do-list.png";
import githubimg from "../images/github_project.png";
import netfliximg from "../images/netflix-min.png";
import weatherimg from "../images/weather-img.png";
import solidearthimg from "../images/s-earth-final.png";
// import { TiltDirection } from "tsparticles";
// import todocropimg from "../images/to-do-list-cropped.png"; //dont use

function PortfolioTwo() {
  const projects = [
    {
      name: "To Do List",
      description:
        "A simple to do list application that allows the user to add or delete a task. This app uses local storage to store the data without resetting on refresh or exiting. I find this application very useful as it helps me keep track of daily tasks!",
      techs: ["React", "Material UI"],
      link: todoimg,
      demo: "https://todo.amanbatth.com",
    },
    {
      name: "Weather App",
      description:
        "A weather application that displays the current weather of the location entered. Future update will  include style enhancements and forecasts for a certain amount of days.",
      techs: ["React", "Web API", "SASS"],
      link: weatherimg,
      demo: "https://reactweather.amanbatth.com",
    },

    {
      name: "Responsive Websites",
      description:
        "Developed modern websites for clients that adjust automatically depending on the screen of the device it is displayed on.",
      link: solidearthimg,
      demo: "http://www.solidearth.ca",
      techs: ["WordPress"],
    },

    {
      name: "Github User App",
      description:
        "A Github profile search application that returns the users avatar, followers, following, and number of repositories.",
      techs: ["React", "Web API", "Tailwind CSS"],
      link: githubimg,
      demo: "http://githubsearch.amanbatth.com",
    },

    {
      name: "Netflix Clone",
      description:
        "Created a web page that looks similar to the Netflix webpage. I created this by following a tutorial by Clever Programmer. I found it very useful as it allowed me to learn creative developing techniques from a more experienced React developer.",
      techs: ["React", "Web API"],
      link: netfliximg,
      demo: "http://netflix-clone.amanbatth.com",
    },
  ];

  return (
    <section id="portfolio">
      <div className="section__intro">
        <h2>Portfolio</h2>
        <span>Some of my projects</span>
      </div>
      <div className="project-container">
        {projects.map((project, i) => (
          <ProjectItem
            key={`${project.name}-${i}`}
            title={project.name}
            description={project.description}
            link={project.link}
            techs={project.techs}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioTwo;
