import styles from "./Navigation.module.scss";
import Link from "next/link";

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
    </div>
  );
};

export default Navigation;
