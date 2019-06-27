import React from "react";

import { Spring } from "react-spring/renderprops";

import bolt from "../assets/logo/bolt.png";
import circle from "../assets/logo/circle.png";
import whoIs from "../assets/whoIs.png";
import fsDev from "../assets/fsDev.png";

import Tilt from "react-tilt";

const Home = () => {
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <img
            style={{
              ...props,
              alignSelf: "center",
              width: "34vh",
              objectFit: "scale-down"
            }}
            src={whoIs}
            alt=""
          />
        )}
      </Spring>

      <Spring
        from={{
          opacity: 0,
          transform: "scale(0) rotate(0deg)"
        }}
        to={{
          opacity: 1,
          transform: "scale(1) rotate(-360deg)"
        }}
      >
        {props => (
          <Tilt
            options={{
              scale: 1.13
            }}
            style={{
              ...props,
              alignSelf: "center",
              height: "25vh",
              width: "25vh"
            }}
          >
            {/* <img
              style={{
                height: "25vh"
              }}
              src={logo}
              alt=""
            /> */}

            <img
              style={{
                height: "25vh",
                position: "absolute"
              }}
              src={circle}
              alt=""
            />

            <Tilt
              options={{
                scale: 1,
                axis: "x",
                reverse: true
              }}
            >
              <img
                style={{
                  height: "25vh",
                  position: "absolute"
                }}
                src={bolt}
                alt=""
              />
            </Tilt>
          </Tilt>
        )}
      </Spring>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <img
            style={{
              ...props,
              alignSelf: "center",
              width: "34vh",
              objectFit: "scale-down"
            }}
            src={fsDev}
            alt=""
          />
        )}
      </Spring>
    </>
  );
};

export default Home;
