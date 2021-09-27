import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particle-config";

function ParticleBackground() {
  return (
    <Particles
      style={{ width: "100%", height: "100vh" }}
      params={particlesConfig}
    ></Particles>
  );
}

export default ParticleBackground;
