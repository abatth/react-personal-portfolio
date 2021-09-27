import React from "react";
import "./About.css";
import dev from "../images/developer.png";
import resume from "../pdf/Aman-Batth-Resume.pdf";
import { FaDownload } from "react-icons/fa";

const About = () => {
  // let resizeTimer;
  // window.addEventListener("resize", () => {
  //   document.body.classList.add("resize-animation-stopper");
  //   clearTimeout(resizeTimer);
  //   resizeTimer = setTimeout(() => {
  //     document.body.classList.remove("resize-animation-stopper");
  //   }, 400);
  // });

  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h2 className="about__title">About Me</h2>
        <span>Who I am</span>
      </div>
      <div className="about__content">
        <div className="about-img__container">
          <img src={dev} alt="about-pic" className="about__img" />
        </div>
        <div className="grid-2">
          <p className="about__paragraph">
            Hello there! I am a Computer Engineering Technology graduate from
            the Northern Alberta Institute of Technology. I have currently been
            focusing on front end development. Learning new technologies excites
            me and I plan to keep improving upon my skills! I am currently
            learning React JS, which is how I created this website. More of my
            projects can be found on my{" "}
            <a
              href="https://www.github.com/abatth"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub profile
            </a>
            .
          </p>
          <div className="about__btn">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-about"
            >
              Download Resume{" "}
              {/* <i className="uil uil-download-alt button__icon"></i> */}
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
