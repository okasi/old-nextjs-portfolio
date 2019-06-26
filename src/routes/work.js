import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Spring } from "react-spring/renderprops";

import logo from "../assets/logo/osLogo.png";

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
            {/* 
              first: pobu
              second: api mashup
              third: cineo
              fourth: weather 
            */}

            <Carousel>
              <>
                <img
                  src={logo}
                  style={{
                    maxWidth: "57.2vmin",
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">Work 1 pobu</p>
              </>

              <>
                <img
                  src={logo}
                  style={{
                    maxWidth: "57.2vmin",
                    objectFit: "cover"
                  }}
                  alt=""
                />
                <p className="legend">Work 2 Cineo</p>
              </>
            </Carousel>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Work;
