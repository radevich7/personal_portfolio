import Link from "next/link";
import styles from "./Navigation.module.scss";
import ScrollTo from "react-scroll-into-view";
// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const NavLinks = (props) => {
  return (
    <>
      {/* List of nav links */}
      <ul className={styles.nav__list}>
        <li className={`${styles.nav__list__item} `}>
          <ScrollTo selector="#about">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              About me
            </a>
          </ScrollTo>
        </li>
        <li className={`${styles.nav__list__item} `}>
          <ScrollTo selector="#skills">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Skills
            </a>
          </ScrollTo>
        </li>
        <li className={`${styles.nav__list__item} `}>
          <ScrollTo selector="#portfolio">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Portfolio
            </a>
          </ScrollTo>
        </li>

        <li className={`${styles.nav__list__item} `}>
          <ScrollTo selector="#contactForm">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Contact
            </a>
          </ScrollTo>
        </li>
        {/* Social media links*/}
        <div className={styles.nav__social}>
          <Link href="https://www.linkedin.com/in/julian-radevych/">
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
      </ul>
    </>
  );
};

export default NavLinks;
