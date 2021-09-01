import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <h1>Aman Batth</h1>
        </div>

        <ul className="footer__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="footer__social"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://www.github.com/abatth"
            target="_blank"
            class="footer__social"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
