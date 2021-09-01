import React, { useState } from "react";
import "./Portfolio.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import image1 from "../images/portfolio1.jpg";
import image2 from "../images/portfolio2.jpg";
import image3 from "../images/portfolio3.jpg";

const imageArr = [image1, image2, image3];
const length = imageArr.length;

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    //if at last image reset to first image, otherwise show next image
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <section id="portfolio">
      <div className="section__intro">
        <h2>Portfolio</h2>
        <span>Some of my work</span>
      </div>
      <div class="slider">
        {imageArr.map((slideimg, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="testing">
                  <img
                    src={slideimg}
                    alt="portfolio image"
                    className={`slide-image ${"image-" + index}`}
                  />
                  <div className="text-wrapper">
                    <h1 className={`text-` + index}></h1>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="arrows-container">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
      <div>
        <p className="view-more">
          To view more of the projects that I have worked on please visit my
          Github Profile.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
