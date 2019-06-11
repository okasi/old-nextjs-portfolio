import React, { useState } from 'react';
import './App.css';
import { animated, Keyframes } from 'react-spring/renderprops';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './routes/home'
import About from './routes/about'
import Work from './routes/work'

import HomeButton from './assets/buttons/home'
import AboutButton from './assets/buttons/about'
import WorkButton from './assets/buttons/work'

import LinkedInButton from './assets/buttons/linkedin'
import GithubButton from './assets/buttons/github'
import TwitterButton from './assets/buttons/twitter'

import logo from './assets/osLogo.png'
import whoIs from './assets/whoIs.png'
import fsDev from './assets/fsDev.png'

function App() {

  const [barDone, setBarDone] = useState(false)

  const TopBar = Keyframes.Spring(async next => {

    if (barDone === false) {
      await next({
        from: {
          opacity: 0,
          left: 'calc(50vw - 6.25vmin)',
          top: 'calc(50vh - 6.25vmin)',
          width: '12.5vmin',
        },
        opacity: 1,
      })
      //Go Left
      await next({
        left: 'calc(0vw - 0vmin)',
      })
      //Go Top
      await next({
        top: 'calc(0vh - 0vmin)',
      })
      //Go Center
      await next({
        left: 'calc(50vw - 6.25vmin)',
      })
      //Margin away from top
      await next({
        from: { marginTop: '0vmin' },
        marginTop: '3.125vmin',
      })
      //Expand sides
      await next({
        width: '75vmin',
        left: 'calc(50vw - 37.5vmin)',
      })

      setBarDone(true)
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          left: 'calc(50vw - 37.5vmin)',
          // top: 'calc(50vh - 6.25vmin)',
          width: '75vmin',
          marginTop: '3.125vmin',
        },
        opacity: 1,
      })

    }

    // alert("done")

  })

  const BottomBar = Keyframes.Spring(async next => {

    if (barDone === false) {
      await next({
        from: {
          opacity: 0,
          right: 'calc(50vw - 6.25vmin)',
          bottom: 'calc(50vh - 6.25vmin)',
          width: '12.5vmin',
        },
        opacity: 1,
      })
      //Go Left
      await next({
        right: 'calc(0vw - 0vmin)',
      })
      //Go Top
      await next({
        bottom: 'calc(0vh - 0vmin)',
      })
      //Go Center
      await next({
        right: 'calc(50vw - 6.25vmin)',
      })
      //Margin away from bottom
      await next({
        from: { marginBottom: '0vmin' },
        marginBottom: '3.125vmin',
      })
      //Expand sides
      await next({
        width: '75vmin',
        right: 'calc(50vw - 37.5vmin)',
      })

      setBarDone(true)
    }

    if (barDone === true) {
      await next({
        from: {
          opacity: 0,
          right: 'calc(50vw - 37.5vmin)',
          bottom: 'calc(0vw - 0vmin)',
          width: '75vmin',
          marginBottom: '3.125vmin',
        },
        opacity: 1,
      })

    }

    // alert("done")

  })


  return (
    <>
      <Router>
        <TopBar native>
          {props => (
            <animated.div
              style={{
                ...props,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                height: '12.5vmin',
                borderRadius: '6.25vmin',
                backgroundColor: '#1BADB4',
                position: 'absolute',
              }}
            >

              {barDone && (
                <>
                  <HomeButton></HomeButton>
                  <AboutButton></AboutButton>
                  <WorkButton></WorkButton>
                </>
              )
              }

            </animated.div>
          )}
        </TopBar>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '18.5vmin',
            paddingBottom: '18.5vmin',
            height: 'calc(100vh - 37vmin)',
          }}
        >


        <img
        style={{
          alignSelf: 'center',
          width: '50vmin',
          objectFit: 'scale-down',
        }}
        src={whoIs}
      >
      </img>



          <img
            style={{
              alignSelf: 'center',
              // marginLeft: 'calc(50vw) - 12.5vmin',
              height: '25vmin',
            }}
            src={logo}
          >
          </img>


          <img
            style={{
              alignSelf: 'center',
              // marginLeft: 'calc(50vw) - 12.5vmin',
              width: '50vmin',
              objectFit: 'scale-down',
            }}
            src={fsDev}
          >
          </img>


        </div>

        <BottomBar native>
          {props => (
            <animated.div
              style={{
                ...props,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                // flexGrow: 1,
                height: '12.5vmin',
                borderRadius: '6.25vmin',
                backgroundColor: '#1BADB4',
                position: 'absolute',
              }}
            >

              {barDone && (
                <>
                  <LinkedInButton></LinkedInButton>
                  <GithubButton></GithubButton>
                  <TwitterButton></TwitterButton>
                </>
              )
              }

            </animated.div>
          )}
        </BottomBar>


        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />

      </Router>

    </>
  );
}

export default App;
