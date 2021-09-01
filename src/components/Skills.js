import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section class="skills section s1" id="skills">
      <div class="section__intro">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>
      </div>

      <div class="skills__terminal">
        <div class="dots-wrapper">
          <div id="dot-1" class="browser-dot"></div>
          <div id="dot-2" class="browser-dot"></div>
          <div id="dot-3" class="browser-dot"></div>
        </div>
        <div class="skills__terminal--body">
          <p>> Some of the technologies that I have experience in include...</p>
          <br />
          <p>> HTML</p>
          <p>> CSS/SASS</p>
          <p>> JavaScript</p>
          <p>> React</p>
          <p>> C#</p>
          <p>> WordPress</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
