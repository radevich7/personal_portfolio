import { Fragment, useEffect } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Portfolio from "../components/portfolio/Portfolio";
import Header from "../components/header/Header";
import ContactForm from "../components/contactForm/ContactForm";
import Skills from "../components/skills/Skills";
import HeadTitle from "../components/reusableComponents/HeadTitle";
const HomePage = () => {
  // When in view to import the portfolio component

  // fade in effect for different sections on the home page
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <HeadTitle />
      <Header />
      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="200">
        <Portfolio />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="200">
        <Skills />
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="200">
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default HomePage;
