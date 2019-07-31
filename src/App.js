import React, { useState } from "react";
import "./App.css";
import { animated, Keyframes } from "react-spring/renderprops";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Work from "./routes/work";

import HomeButton from "./assets/buttons/home";
import AboutButton from "./assets/buttons/about";
import WorkButton from "./assets/buttons/work";

import LinkedInButton from "./assets/buttons/linkedin";
import GithubButton from "./assets/buttons/github";
import TwitterButton from "./assets/buttons/twitter";

import Div100vh from "react-div-100vh";

// https://github.com/jonathandion/react-tilt

// https://reactjsexample.com/css-3d-mouse-tracking-with-react/

function App() {
  const [barDone, setBarDone] = useState(false);

  const TopBar = Keyframes.Spring(async next => {
    if (barDone === false) {
      await next({
        from: {
          opacity: 0,
          left: "calc(50% - 6.25vh)",
          top: "calc(50% - 6.25vh)",
          maxWidth: "12.5vh",
          width: "12.5%"
        },
        opacity: 1
      });
      //Go Left
      await next({
        left: "calc(0vw - 0vh)"
      });
      //Go Top
      await next({
        top: "calc(0vh - 0vh)"
      });
      //Go Center
      await next({
        left: "calc(50% - 6.25vh)"
      });
      //Margin away from top
      await next({
        from: { marginTop: "0vh" },
        marginTop: "3.125vh"
      });
      //Expand sides
      await next({
        left: "calc(16% - 0vh)",
        maxWidth: "none",
        width: "68%"
      });

      setBarDone(true);
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          left: "16%",
          width: "68%",
          marginTop: "3.125vh"
        },
        opacity: 1
      });
    }
  });

  const BottomBar = Keyframes.Spring(async next => {
    if (barDone === false) {
      await next({
        from: {
          opacity: 0,
          right: "calc(50% - 6.25vh)",
          bottom: "calc(50% - 6.25vh)",
          maxWidth: "12.5vh",
          width: "12.5%"
        },
        opacity: 1
      });
      //Go Left
      await next({
        right: "calc(0vw - 0vh)"
      });
      //Go Top
      await next({
        bottom: "calc(0vh - 0vh)"
      });
      //Go Center
      await next({
        right: "calc(50% - 6.25vh)"
      });
      //Margin away from bottom
      await next({
        from: { marginBottom: "0vh" },
        marginBottom: "3.125vh"
      });
      //Expand sides
      await next({
        right: "calc(16% - 0vh)",
        maxWidth: "none",
        width: "68%"
      });

      setBarDone(true);
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          right: "16%",
          width: "68%",
          bottom: "calc(0vw - 0vh)",
          marginBottom: "3.125vh"
        },
        opacity: 1
      });
    }

    // alert("done")
  });

  return (
    <Div100vh>
      <Router>
        <nav>
          <TopBar native>
            {props => (
              <animated.div
                style={{
                  ...props,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",

                  borderRadius: "12.5vh",
                  backgroundColor: "#1BADB4",
                  position: "absolute",

                  height: "12.5vh",
                  minWidth: "12.5vh"
                }}
              >
                {barDone && (
                  <>
                    <HomeButton />
                    <AboutButton />
                    <WorkButton />
                  </>
                )}
              </animated.div>
            )}
          </TopBar>
        </nav>

        {barDone && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "63%",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
            </div>
          </>
        )}

        <nav>
          <BottomBar native>
            {props => (
              <animated.div
                style={{
                  ...props,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",

                  borderRadius: "12.5vh",
                  backgroundColor: "#1BADB4",
                  position: "absolute",

                  height: "12.5vh",
                  minWidth: "12.5vh"
                }}
              >
                {barDone && (
                  <>
                    <LinkedInButton />
                    <GithubButton />
                    <TwitterButton />
                  </>
                )}
              </animated.div>
            )}
          </BottomBar>
        </nav>
      </Router>
    </Div100vh>
  );
}

export default App;
