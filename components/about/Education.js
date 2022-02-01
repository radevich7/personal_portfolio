import styles from "./About.module.scss";
import React from "react";
import AboutPersonal from "../reusableComponents/AboutPersonal";
// icons
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { GiFishingHook } from "react-icons/gi";

import SkillsList from "../skills/SkillsList";

const Education = React.forwardRef((props, ref) => {
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
    <div className={styles.about__rightContainer} ref={ref}>
      {/* Education */}
      <div className={styles.about__education}>
        <div className={styles.about__skills}>
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
      <SkillsList />
    </div>
  );
});

export default Education;
