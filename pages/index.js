import { Fragment, useEffect, useRef } from "react";
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
  // When in view to import the component
  // Portfolio
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  // Skills section
  const { observeSkills, inViewSkills } = useInView({
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
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-offset="200"
        ref={observeSkills}
      >
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
