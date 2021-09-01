import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
