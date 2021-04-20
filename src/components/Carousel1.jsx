import SliderData from "./SliderData";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Carousel1(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    return setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    return setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, length]);

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        const left = {
          position: "relative",
          left: "-" + current + "00vw",
          transition: "1s",
        };
        return (
          <div style={left} className="slide">
            <img src={slide.img} alt="" className="image" />
          </div>
        );
      })}
    </section>
  );
}

export default Carousel1;
