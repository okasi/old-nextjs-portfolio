// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
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
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#2d2d2d" />
          <meta name="theme-color" content="#22222" />

          <meta
            property="og:description"
            name="description"
            content="Okan's personal website. Links to his social media profiles and his projects."
          />
          <meta name="twitter:creator" content="@okasi_me" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            name="title"
            content="Who is Okan? - Portfolio"
          />
          <meta
            property="og:image"
            content="https://okasi.me/static/thumbnail.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
