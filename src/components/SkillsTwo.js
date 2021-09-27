import React from "react";
import "./SkillsTwo.css";
import { IconContext } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaWordpress,
} from "react-icons/fa";
import csharp from "../images/c-sharp-logo.svg";
// import python from "../images/python-logo.png";

function SkillsTwo() {
  return (
    <IconContext.Provider value={{ size: "8em" }}>
      <section className="skills section s1" id="skills">
        <div className="section__intro">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical ability</span>
        </div>
        <div className="icons-flex-container">
          <div className="icon-container">
            <FaHtml5 className="custom-icon" style={{ color: "#e34f26" }} />
            <h4>HTML</h4>
          </div>
          <div className="icon-container">
            <FaCss3Alt className="custom-icon" style={{ color: "#1572b6" }} />
            <h4>CSS</h4>
          </div>
          <div className="icon-container">
            <FaSass className="custom-icon" style={{ color: "#C76494" }} />
            <h4>SASS</h4>
          </div>
          <div className="icon-container">
            <FaJs className="custom-icon" style={{ color: "#F7DF1E" }} />
            <h4>JavaScript</h4>
          </div>
          <div className="icon-container">
            <FaReact className="custom-icon" style={{ color: "#61DAFB" }} />
            <h4>React</h4>
          </div>
          <div className="icon-container">
            <FaGitAlt className="custom-icon" style={{ color: "#F05033" }} />
            <h4>Git</h4>
          </div>
          <div className="icon-container">
            <FaNpm className="custom-icon" style={{ color: "#CE0000" }} />
            <h4>npm</h4>
          </div>
          <div className="icon-container">
            <FaWordpress className="custom-icon" style={{ color: "#216EA3" }} />
            <h4>WordPress</h4>
          </div>
          <div>
            <img src={csharp} alt="c sharp" style={{ height: "7rem" }} />
            <h4>C#</h4>
          </div>
          {/* <div>
            <img src={python} alt="python" style={{ height: "8rem" }} />
            <h4>Python</h4>
          </div> */}
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default SkillsTwo;
