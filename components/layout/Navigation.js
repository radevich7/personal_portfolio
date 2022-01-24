import styles from "./Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <span className={styles.nav__logo__element1}>J</span>
        </Link>
        <span className={styles.nav__logo__element2}>Julian</span>
        <span className={styles.nav__logo__element3}>Web Developer</span>
      </div>
      <nav className={styles.navigation}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="#1" className="navigation__link">
              About
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#2" className="navigation__link">
              My skills
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="#4" className="navigation__link">
              Contact
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#5" className="navigation__link">
              Follow up links
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
