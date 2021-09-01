import React from "react";
import "./About.css";
import cartoon from "../images/profile-cartoon.jpg";

const About = () => {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h2 className="about__title">About Me</h2>
        <span>Who I am</span>
      </div>
      <div className="about__content">
        <div className="about-img__container">
          <img src={cartoon} alt="" class="about__img" />
        </div>
        <div className="grid-2">
          <p class="about__paragraph">
            Hello there! I am a Computer Engineering Technology graduate from
            Northern Alberta Institute of Technology. I have currently been
            focusing on front end development. Learning new technologies excites
            me and I plan to keep growing so I can become a full stack
            developer! I am currently learning ReactJS, which is how I used to
            make this website! More of my projects can be found on my GitHub
            profile.
          </p>
          <div class="about__btn">
            <a href="" class="btn-about">
              Download CV <i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
