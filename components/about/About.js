import styles from "./About.module.scss";

import AboutMe from "./AboutMe";
import Education from "./Education";

const About = () => {
  return (
    <section className={styles.about}>
      <AboutMe />
      <Education />
    </section>
  );
};

export default About;
