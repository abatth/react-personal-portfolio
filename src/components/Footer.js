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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/amanbatth/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://www.github.com/abatth"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
