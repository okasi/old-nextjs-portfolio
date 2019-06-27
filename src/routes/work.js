import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Spring } from "react-spring/renderprops";

import pobu from "../assets/screenshots/pobu.png";
import mashup from "../assets/screenshots/mashup.png";
import cineo from "../assets/screenshots/cineo.png";
import weather from "../assets/screenshots/weather.png";

import "./carousel.css";

const Work = () => {
  return (
    <>
      <Spring
        from={{ opacity: 0, transform: "scale(0.75)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        {props => (
          <div
            style={{
              ...props,
              width: "34%",
              // margin: "auto",
              // padding: "3.3vmin",
              overflow: "hidden"
            }}
          >
            <Carousel emulateTouch autoPlay infiniteLoop>
              <>
                <img
                  src={pobu}
                  style={{
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">
                  <a
                    href="https://pobu.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>https://pobu.io/</b>
                  </a>
                </p>
              </>

              <>
                <img
                  src={mashup}
                  style={{
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">
                  <a
                    href="https://okasi.me/mashup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>https://okasi.me/mashup</b>
                  </a>
                </p>
              </>
              <>
                <img
                  src={cineo}
                  style={{
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">
                  <a
                    href="http://cineo.chas.academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>http://cineo.chas.academy/</b>
                  </a>
                </p>
              </>
              <>
                <img
                  src={weather}
                  style={{
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">
                  <a
                    href="https://okasi.me/weather/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>https://okasi.me/weather/</b>
                  </a>
                </p>
              </>
            </Carousel>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Work;
