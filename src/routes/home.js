import React from "react";

import { Spring } from "react-spring/renderprops";

import logo from "../assets/osLogo.png";
import whoIs from "../assets/whoIs.png";
import fsDev from "../assets/fsDev.png";

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
          <img
            style={{
              ...props,
              alignSelf: "center",
              // marginLeft: 'calc(50%) - 12.5vh',
              height: "25vh"
            }}
            src={logo}
            alt=""
          />
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
