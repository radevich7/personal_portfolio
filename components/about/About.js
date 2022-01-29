import Button from "../reusableComponents/Button";
import styles from "./About.module.scss";
import Link from "next/link";
import LinkButton from "../reusableComponents/LinkButton";
import AboutPersonal from "../reusableComponents/AboutPersonal";

// icons
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { GiFishingHook } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";

const About = () => {
  const languages = [
    { name: "English", text: "fluent" },
    { name: "Ukrainian", text: "fluent" },
    { name: "Russian", text: "fluent" },
  ];
  const interests = [
    { name: <FaHeadphones />, text: "Music" },
    { name: <MdOutlineCardTravel />, text: "Travel" },
    { name: <BiMoviePlay />, text: "Movies" },
    { name: <GiFishingHook />, text: "Fishing" },
  ];

  return (
    <section className={styles.about}>
      {/* Left col */}
      <h1 className={styles.about__zone__heading}>About me</h1>
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
        </div>
      </div>
      {/* Right col */}
      <div className={styles.about__rightContainer}>
        {/* Education */}
        <div className={styles.about__education}>
          <h3 className={styles.about__education__heading}>Education</h3>
          <div className={styles.about__education__main}>
            <div>
              <span>Front-End Developer Program</span>
              <span>Launchpad by VOG</span>
              <span>Calgary, AB </span>
            </div>
            <span className={styles.about__education__dates}>
              09/2021 -01/2022
            </span>
          </div>
          <div className={styles.about__education__main}>
            <div>
              <span>Web Development Course</span>
              <span>Juno College of Technology</span>
              <span>Toronto, ON </span>
            </div>
            <span className={styles.about__education__dates}>
              02/2021 -04/2021
            </span>
          </div>
          <div className={styles.about__education__main}>
            <div>
              <span>BS, Mechanical Engineering</span>
              <span>National Transport University</span>
              <span>Kyiv, Ukraine </span>
            </div>
            <span className={styles.about__education__dates}>
              09/2007 -06/2011
            </span>
          </div>
        </div>
        {/* Languages */}
        <AboutPersonal items={languages} title={"Languages"} />
        {/* Personal interests */}
        <AboutPersonal items={interests} title={"Interests"} style={true} />
      </div>
    </section>
  );
};

export default About;
