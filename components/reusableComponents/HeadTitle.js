import Head from "next/head";

const HeadTitle = () => {
  return (
    <Head>
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
  );
};

export default HeadTitle;
