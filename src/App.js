import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Portfolio from "./components/Portfolio";
import PortfolioTwo from "./components/PortfolioTwo";
import About from "./components/About";
// import Skills from "./components/Skills";
import SkillsTwo from "./components/SkillsTwo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
// import Hero from "./components/Hero";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-208279765-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Home />
      <About />
      {/* <Skills /> */}
      <SkillsTwo />
      {/* <Portfolio /> */}
      <PortfolioTwo />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
