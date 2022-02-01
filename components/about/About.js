import styles from "./About.module.scss";
import react, { useState, useEffect, useRef } from "react";

import AboutMe from "./AboutMe";
import Education from "./Education";

import SkillsList from "../skills/SkillsList";
import Parallax from "react-springy-parallax";
const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [aboutSection, setAboutSection] = useState();
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      setAboutSection(ref.current.getBoundingClientRect().top);
    }
  }, []);
  console.log(aboutSection);
  //
  console.log(offsetY);
  // const renderContent = () => <></>;
  return (
    <section className={styles.about}>
      <div className={styles.sticky}>
        <AboutMe />
      </div>

      <Education ref={ref} />
    </section>
  );
};

export default About;
