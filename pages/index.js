import { Fragment, useEffect } from "react";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import ContactForm from "../components/contactForm/ContactForm";
import Skills from "../components/skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <Header />

      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="200">
        <Portfolio />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="200">
        <Skills />
      </div>
      <div
        style={{ paddingBottom: "25vh" }}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default HomePage;
