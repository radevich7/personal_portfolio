import Button from "../reusableComponents/Button";
import styles from "./About.module.scss";
import Link from "next/link";
import LinkButton from "../reusableComponents/LinkButton";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__heading}>About me</h1>
      <p className={styles.about__introduction}>
        I'm a Calgary-based web developer, with a strong knowledge of front-end
        web development Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Expedita maiores quidem similique aliquid. Nulla officia inventore
        id eaque natus quaerat minus
      </p>
      <div className={styles.about__zone}>
        <div className={styles.about__zone__photo}></div>
        <div className={styles.about__zone__text}>
          <h2>Julian Radevych</h2>
          <h4>Front-End Developer</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aliquid eius quaerat, repellendus ad in possimus sequi pariatur est
            minus amet placeat perferendis animi impedit quibusdam cumque fugiat
            numquam suscipit. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloribus aliquid eius quaerat, repellendus ad in
            possimus sequi pariatur est minus amet placeat perferendis animi
            impedit quibusdam cumque fugiat numquam suscipit.
          </p>
          <LinkButton url="/">Download CV</LinkButton>
        </div>
      </div>
      {/* <div className={styles.about__interests}>
        <h3>My interests</h3>
      </div> */}
    </section>
  );
};

export default About;
