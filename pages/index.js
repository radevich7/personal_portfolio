import { Fragment } from "react";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import ContactForm from "../components/contactForm/ContactForm";
import Skills from "../components/skills/Skills";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Portfolio />
      <Skills />
      <div style={{ paddingBottom: "25vh" }}>
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default HomePage;
