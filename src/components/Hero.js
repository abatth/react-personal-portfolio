import React from "react";
import "./Hero.css";
import ParticleBackground from "./ParticleBackground";

function CenterTitle() {
  return (
    <div className="center_all">
      <div className="text-container">
        <h1 className="custom-subtitle">
          Hello, I'm <span style={{ color: "#e31b6d" }}> Aman Batth </span>
        </h1>
        <h1 className="custom-subtitle">I'm a Front End Developer</h1>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div id="particles-js">
      <ParticleBackground />
      <CenterTitle />
    </div>
  );
}

export default Hero;
