import Document, { Html, Head, Main, NextScript } from "next/document";

// CHANGE FONTS COMPONENT

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <title>Julian Radevych </title>
          <meta
            name="description"
            content="I'm a Front-End Developer located in Canada. I enjoy coding and solve problems through code. I am passionate about
            building interactive, eye-catching, accessible applications and
            digital experiences."
          />

          {/* FAVICON */}

          <link
            rel="shortcut icon"
            href="/favIcon.png"
            type="image/png"
            sizes="64x64"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
