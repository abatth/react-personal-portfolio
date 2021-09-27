import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section s1" id="skills">
      <div className="section__intro">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical ability</span>
      </div>

      <div className="skills__terminal">
        <div className="dots-wrapper">
          <div id="dot-1" className="browser-dot"></div>
          <div id="dot-2" className="browser-dot"></div>
          <div id="dot-3" className="browser-dot"></div>
        </div>
        <div className="skills__terminal--body">
          <p>
            &gt; Some of the technologies that I have experience in include...
          </p>
          <br />
          <p>&gt; HTML</p>
          <p>&gt; CSS/SASS</p>
          <p>&gt; JavaScript</p>
          <p>&gt; React</p>
          <p>&gt; C#</p>
          <p>&gt; WordPress</p>
          <p>&gt; Bash</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
