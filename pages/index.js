import { Fragment } from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";
const HomePage = () => {
  return (
    <Fragment>
      <Header />

      <About />
      <Skills />
      <Portfolio />
    </Fragment>
  );
};

export default HomePage;
