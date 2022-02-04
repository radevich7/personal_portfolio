import styles from "./About.module.scss";
import react, { useState, useEffect, useRef } from "react";

import AboutMe from "./AboutMe";
import Education from "./Education";

import SkillsList from "../skills/SkillsList";
import Parallax from "react-springy-parallax";
const About = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const [aboutSection, setAboutSection] = useState();
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const ref = useRef();
  // useEffect(() => {
  //   if (ref.current) {
  //     setAboutSection(ref.current.getBoundingClientRect().top);
  //   }
  // }, []);

  return (
    <section className={styles.about}>
      <AboutMe />
      <Education />
    </section>
  );
};

export default About;
