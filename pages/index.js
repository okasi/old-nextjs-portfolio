import "react-app-polyfill/stable";

import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

import Head from "next/head";

import { MemoryRouter as Router, Route, Redirect } from "react-router-dom";

import "../assets/index.css";

import { animated, Keyframes } from "react-spring/renderprops.cjs";

import Home from "./home";
import About from "./about";
import Work from "./work";

import HomeButton from "../assets/buttons/home";
import AboutButton from "../assets/buttons/about";
import WorkButton from "../assets/buttons/work";

import LinkedInButton from "../assets/buttons/linkedin";
import GithubButton from "../assets/buttons/github";
import TwitterButton from "../assets/buttons/twitter";

import Div100vh from "react-div-100vh";

// https://github.com/jonathandion/react-tilt

// https://reactjsexample.com/css-3d-mouse-tracking-with-react/

const IndexPage = () => {
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

  function initializeReactGA() {
    ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
    ReactGA.pageview("/");
  }

  useEffect(() => {
    initializeReactGA();
  }, []);

  // const isWebKit = "WebkitAppearance" in document.documentElement.style;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link rel="manifest" href="/static/manifest.json" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d2d2d" />
        <meta name="theme-color" content="#22222" />
        <meta
          property="og:description"
          name="description"
          content="Okan's personal website. Links to his social media profiles and his projects."
        />
        <meta name="twitter:creator" content="@whosOkan" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="title"
          content="Who is Okan? - Portfolio"
        />
        <meta property="og:image" content="/static/thumbnail.png" />
      </Head>

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
                <Redirect exact path="/" to="/home" />
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
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  );
};

export default IndexPage;
