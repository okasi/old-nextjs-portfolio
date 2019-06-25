import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Spring } from "react-spring/renderprops";

import logo from "../assets/osLogo.png";

import "./carousel.css";

const Work = () => {
  return (
    <>
      <Spring
        from={{ opacity: 0, transform: "scale(0.75)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
        style={{
          height: '100%',
        }}
      >
        {props => (
          <div
            style={{
              ...props,
              width: "57.2vmin",
              margin: "auto",
              // padding: "3.3vmin",
              // overflow: "hidden",
              height: '100%',
            }}
          >
            <Carousel>
            
                <div>
                  <img
                    src={logo}
                    style={{
                      maxWidth: "57.2vmin",
                      objectFit: "cover"
                    }}
                    alt=""
                  />
                  <p className="legend">Work 1 pobu</p>
                </div>

                <div>
                  <img
                    src={logo}
                    style={{
                      maxWidth: "57.2vmin",
                      objectFit: "cover"
                    }}
                    alt=""
                  />
                  <p className="legend">Work 2 Cineo</p>
                </div>
              
            </Carousel>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Work;
