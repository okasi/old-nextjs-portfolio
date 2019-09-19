import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Head from "next/head";

import { Spring } from "react-spring/renderprops.cjs";
import Tilt from "react-tilt";

const About = () => {
  useEffect(() => {
    ReactGA.pageview("/about");
  }, []);

  return (
    <>
      <Head>
        <title>Who is Okan? - About</title>
      </Head>

      <Spring
        from={{ opacity: 0, transform: "scale(0.75)" }}
        to={{ opacity: 1, transform: "scale(1)" }}
      >
        {props => (
          <Tilt
            options={{
              scale: 1,
              max: 21
            }}
            style={{
              ...props,
              background: "#595990",
              width: "57.2vmin",
              margin: "auto",
              padding: "3.3vmin",
              overflow: "overlay"
            }}
            className="Tilt"
          >
            <div className="Tilt-inner">
              <center>
                <span
                  style={{
                    fontSize: "calc(1.5vw + 1.5vh + 0.75vmin)"
                  }}
                >
                  <span
                    style={{
                      borderBottom: "2px solid white",
                      letterSpacing: "0.5vw",
                      marginRight: "-0.5vw"
                    }}
                  >
                    ABOUT M
                  </span>
                  <span
                    style={{
                      borderBottom: "2px solid white",
                      marginLeft: ".5vw",
                      marginRight: "0"
                    }}
                  >
                    E
                  </span>
                </span>
              </center>
              <p
                style={{
                  fontSize: "calc(0.75vw + 0.75vh + 0.375vmin)",
                  lineHeight: "1.5",
                  padding: "0 calc(0.1vw + 0.1vh + 0.05vmin)"
                }}
              >
                Hello!
                <br />
                I'm a tech curious guy 🤓 from Stockholm.
                <br />
                <br />
                If you have an application you are interested in developing with
                web technology, I’d love ❤️ to work with you on it.
                <br />
                <br />
                I’m a full-stack 📚 developer which means I can bring your
                project from concept to completion.
                <br />
                <br />I work 💻 primarily with Node.js on the backend and on the
                frontend side of things I use React.js
              </p>
            </div>
          </Tilt>
        )}
      </Spring>
    </>
  );
};

export default About;
