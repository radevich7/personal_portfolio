import { Fragment, useEffect } from "react";
import Header from "../components/header/Header";
import ContactForm from "../components/contactForm/ContactForm";
import Skills from "../components/skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

const PortfolioDynamic = dynamic(() =>
  import("../components/portfolio/Portfolio")
);

const HomePage = () => {
  // When in view to import the portfolio component

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  // fade in effect for different sections on the home page
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Header />
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-offset="200"
        ref={observe}
      >
        {inView && <PortfolioDynamic />}
      </div>
      <div data-aos="fade-up" data-aos-once="true" data-aos-offset="400">
        <Skills />
      </div>
      <div
        style={{ paddingBottom: "25vh" }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-offset="400"
      >
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default HomePage;
