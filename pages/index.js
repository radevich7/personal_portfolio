import { Fragment } from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Portfolio />
    </Fragment>
  );
};

export default HomePage;
