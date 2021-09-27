import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/ab_logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false); //change navbar color when scrolling
  const [burgerClick, setBurgerClick] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);

    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleBurgerClick = () => {
    setBurgerClick(!burgerClick); //toggle
  };

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="logo">
          <a href="#home">
            <img src={logo} className="ab-logo" alt="" />
          </a>
        </div>
        <ul
          className={
            burgerClick
              ? "new-nav__links new-nav__links-active"
              : "new-nav__links"
          }
        >
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
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div
          className={burgerClick ? "burger burg-active" : "burger"}
          onClick={handleBurgerClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
