import Link from "next/link";
import styles from "./Navigation.module.scss";

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const NavLinks = (props) => {
  return (
    <>
      {/* List of nav links */}
      <ul className={styles.nav__list}>
        <li className={`${styles.nav__list__item} ${styles.hide__link}`}>
          <Link href="/">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Home
            </a>
          </Link>
        </li>
        <li className={`${styles.nav__list__item} `}>
          <Link href="/about">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              About me
            </a>
          </Link>
        </li>
        <li className={`${styles.nav__list__item} `}>
          <Link href="/skills">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Skills
            </a>
          </Link>
        </li>
        <li className={`${styles.nav__list__item} `}>
          <Link href="/portfolio">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Portfolio
            </a>
          </Link>
        </li>

        <li className={`${styles.nav__list__item} `}>
          <Link href="/contact">
            <a className={styles.nav__list__link} onClick={props.toggle}>
              Contact
            </a>
          </Link>
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
