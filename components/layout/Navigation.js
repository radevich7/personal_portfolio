import Link from "next/link";
import styles from "./Navigation.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <a className={styles.nav__logo__element1}>J</a>
        </Link>
        <span className={styles.nav__logo__element2}>Julian</span>
        <span className={styles.nav__logo__element3}>Web Developer</span>
      </div>

      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <Link href="/about">
            <a className={styles.nav__list__link}> About me</a>
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/skills">
            <a className={styles.nav__list__link}> Skills</a>
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/portfolio">
            <a className={styles.nav__list__link}>Portfolio</a>
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/resume">
            <a className={styles.nav__list__link}>CV</a>
          </Link>
        </li>

        <li className={styles.nav__list__item}>
          <Link href="/contact">
            <a className={styles.nav__list__link}>Contact</a>
          </Link>
        </li>
      </ul>

      <div className={styles.nav__social}>
        <Link href="https://www.linkedin.com/in/julian-radevych-88a785205/">
          <a className={styles.nav__social__link} target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href="https://github.com/radevich7">
          <a className={styles.nav__social__link} target="_blank">
            <FaGithub />
          </a>
        </Link>
        <Link href="https://twitter.com/radevich7">
          <a className={styles.nav__social__link} target="_blank">
            <FaTwitterSquare />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
