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
import AboutPersonal from "../reusableComponents/AboutPersonal";

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
        {/* Languages */}
        <AboutPersonal items={languages} title={"Languages"} />
        {/* Personal interests */}
        <AboutPersonal items={interests} title={"Interests"} />
      </div>
    </section>
  );
};

export default About;
