import styles from "./Skills.module.scss";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { ImGit } from "react-icons/im";
import { SiFirebase } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { DiJira } from "react-icons/di";

import { MdApi } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SiVisualstudio } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { SiGulp } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.empty}></div>
      <div className={styles.skills__container}>
        <h3 className={styles.skills__heading}>Skills</h3>
        <ul className={styles.skills__list}>
          <li className={styles.skills__list__item}>
            <FaReact />
            <span>React JS</span>
          </li>
          <li className={styles.skills__list__item}>
            <IoLogoJavascript />
          </li>
          <li className={styles.skills__list__item}>NEXT.js</li>
          <li className={styles.skills__list__item}>
            <ImHtmlFive />
            <span>html</span>
          </li>
          <li className={styles.skills__list__item}>
            <SiCss3 />
            <span>css</span>
          </li>
          <li className={styles.skills__list__item}>
            <FaSass />
          </li>
          <li className={styles.skills__list__item}>
            <BsBootstrapFill />
            <span>Bootstrap</span>
          </li>
          <li className={styles.skills__list__item}>
            <ImGit />
            <span>git</span>
          </li>
          <li className={styles.skills__list__item}>
            <SiFirebase />

            <span>Firebase</span>
          </li>
          <li className={styles.skills__list__item}>
            <SiAuth0 />
            <span>auth0</span>
          </li>
          <li className={styles.skills__list__item}>
            <SiNpm />
            <span>npm</span>
          </li>
          <li className={styles.skills__list__item}>
            <DiJira />
            <span>JIRA</span>
          </li>
          <li className={styles.skills__list__item}>
            <SiGulp />
          </li>
          <li className={styles.skills__list__item}>
            <MdApi />
            <span>api</span>
          </li>
          <li className={styles.skills__list__item}>
            <AiFillGithub />
          </li>
          <li className={styles.skills__list__item}>
            <SiVisualstudio />
          </li>
          <li className={styles.skills__list__item}>
            <BsCodeSlash />
          </li>
          <li className={styles.skills__list__item}>
            <VscJson />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
