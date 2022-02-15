import styles from "./About.module.scss";

// components
import AboutMe from "./AboutMe";
import Education from "./Education";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <AboutMe />
      <Education />
    </section>
  );
};

export default About;
