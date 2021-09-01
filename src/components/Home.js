import React, { useEffect, useRef } from "react";
import "./Home.css";
import { init } from "ityped";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backdelay: 1500,
      backspeed: 60,
      strings: ["am a Web Developer!", "enjoy coding!"],
    });
  }, []);
  return (
    <section className="hero" id="home">
      <div className="home__container container">
        <div className="text-container">
          <div>
            <h1 className="headingText">Hi, my name is </h1>
          </div>
          <div>
            <h2 className="large-heading-name">Aman Batth.</h2>
          </div>
          <div>
            <h3 id="typing" class="large-heading-name p2">
              I <span ref={textRef}></span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
