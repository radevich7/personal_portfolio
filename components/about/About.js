import Button from "../reusableComponents/Button";
import styles from "./About.module.scss";
import Link from "next/link";
import LinkButton from "../reusableComponents/LinkButton";

// icons
import { FaHeadphones } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { GiFishingHook } from "react-icons/gi";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__zone}>
        <h1 className={styles.about__zone__heading}>About me</h1>
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
        </div>
      </div>
      <div className={styles.about__personal}>
        <div className={styles.about__education}></div>
        <div className={styles.about__languages}></div>
        <div className={styles.about__personal__interests}>
          <h3>My interests:</h3>
          <div className={styles.about__interests__container}>
            <span className={styles.about__interests__icon}>
              <FaHeadphones />
              <span className={styles.about__interests__icon__text}>Music</span>
            </span>

            <span className={styles.about__interests__icon}>
              <MdOutlineCardTravel />
              <span className={styles.about__interests__icon__text}>
                Travel
              </span>
            </span>
            <span className={styles.about__interests__icon}>
              <BiMoviePlay />{" "}
              <span className={styles.about__interests__icon__text}>
                Movies
              </span>
            </span>
            <span className={styles.about__interests__icon}>
              <GiFishingHook />{" "}
              <span className={styles.about__interests__icon__text}>
                Fishing
              </span>
            </span>

            <span className={styles.about__interests__icon}>
              <FaSwimmer />{" "}
              <span className={styles.about__interests__icon__text}>
                Swimming
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
