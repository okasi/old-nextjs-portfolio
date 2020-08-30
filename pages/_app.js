import React from 'react'
import App from 'next/app'
import { NextSeo } from 'next-seo'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <NextSeo
          title="Who is Okan? - Portfolio"
          description="Okan's personal website. Links to his social media profiles and his projects."
          canonical="hhttps://okasi.me/"
          openGraph={{
            url: 'https://okasi.me/',
            title: 'Who is Okan? - Portfolio',
            description:
              "Okan's personal website. Links to his social media profiles and his projects.",
            images: [
              {
                url: 'https://okasi.me/static/thumbnail.png',
                width: 1200,
                height: 628,
                alt: 'Og Image',
              },
            ],
            site_name: 'Who is Okan? - Portfolio',
          }}
          twitter={{
            handle: '@okasi_me',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
