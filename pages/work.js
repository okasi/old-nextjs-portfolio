import React, { useEffect } from 'react'
import ReactGA from 'react-ga'

import Head from 'next/head'

import { Spring } from 'react-spring/renderprops.cjs'

import { BrowserView, MobileView } from 'react-device-detect'

const Work = () => {
  useEffect(() => {
    ReactGA.pageview('/work')
  }, [])

  return (
    <>
      <Head>
        <title>Who is Okan? - Work</title>
      </Head>

      <Spring
        from={{ opacity: 0, transform: 'scale(0.75)' }}
        to={{ opacity: 1, transform: 'scale(1)' }}
      >
        {(props) => (
          <div
            style={{
              ...props,
              // width: "34%",
              // margin: "auto",
              // padding: "3.3vmin",
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#595990',
                width: '57.2vmin',
                margin: 'auto',
                padding: '3.3vmin',
                overflow: 'overlay',
              }}
            >
              <center>
                <ul
                  style={{
                    fontSize: 'calc(0.75vw + 0.75vh + 0.375vmin)',
                    lineHeight: '1.75',
                    padding: '0 calc(0.1vw + 0.1vh + 0.05vmin)',
                    listStyleType: 'none',
                  }}
                >
                  <li>
                    <a
                      href="https://www.linkedin.com/in/okasi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      ➟ LinkedIn experience section
                    </a>
                  </li>

                  <br />

                  <li>
                    <a
                      href="https://github.com/okasi/live-sites/blob/master/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      ➟ Github projects
                    </a>
                  </li>
                </ul>
              </center>
            </div>
          </div>
        )}
      </Spring>
    </>
  )
}

export default Work
