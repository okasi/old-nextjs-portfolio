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

function App() {
  const [barDone, setBarDone] = useState(false);

  const TopBar = Keyframes.Spring(async next => {
    if (barDone === false) {
      await next({
        from: {
          opacity: 0,
          left: "calc(50vw - 6.25vh)",
          top: "calc(50vh - 6.25vh)",
          width: "12.5vh"
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
        left: "calc(50vw - 6.25vh)"
      });
      //Margin away from top
      await next({
        from: { marginTop: "0vh" },
        marginTop: "3.125vh"
      });
      //Expand sides
      await next({
        width: "75vw",
        left: "calc(50vw - 37.5vw)"
      });

      setBarDone(true);
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          left: "calc(50vw - 37.5vmin)",
          // top: 'calc(50vh - 6.25vh)',
          width: "75vmin",
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
          right: "calc(50vw - 6.25vh)",
          bottom: "calc(50vh - 6.25vh)",
          width: "12.5vh"
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
        right: "calc(50vw - 6.25vh)"
      });
      //Margin away from bottom
      await next({
        from: { marginBottom: "0vh" },
        marginBottom: "3.125vh"
      });
      //Expand sides
      await next({
        width: "75vmin",
        right: "calc(50vw - 37.5vmin)"
      });

      setBarDone(true);
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          right: "calc(50vw - 37.5vmin)",
          bottom: "calc(0vw - 0vh)",
          width: "75vmin",
          marginBottom: "3.125vh"
        },
        opacity: 1
      });
    }

    // alert("done")
  });

  return (
    <>
      <Router>
        <TopBar native>
          {props => (
            <animated.div
              style={{
                ...props,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
                height: "12.5vh",
                borderRadius: "6.25vh",
                backgroundColor: "#1BADB4",
                position: "absolute"
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

        {barDone && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                paddingTop: "18.5vh",
                paddingBottom: "18.5vh",
                height: "calc(100vh - 37vh)"
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
            </div>
          </>
        )}

        <BottomBar native>
          {props => (
            <animated.div
              style={{
                ...props,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
                // flexGrow: 1,
                height: "12.5vh",
                borderRadius: "6.25vh",
                backgroundColor: "#1BADB4",
                position: "absolute"
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
      </Router>
    </>
  );
}

export default App;
