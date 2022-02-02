import { Fragment } from "react";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Portfolio />
      <About />
      <ContactForm />
    </Fragment>
  );
};

export default HomePage;
