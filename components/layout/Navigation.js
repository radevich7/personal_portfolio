import styles from "./Navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <span className={styles.nav__logo__element1}>J</span>
        <span className={styles.nav__logo__element2}>Julian</span>
        <span className={styles.nav__logo__element3}>Web Developer</span>
      </div>
      <nav className={styles.navigation}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="#1" className="navigation__link">
              <a> About</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#2" className="navigation__link">
              <a> My skills</a>
            </Link>
          </li>

          <li className="navigation__item">
            <Link href="#4" className="navigation__link">
              <a> Contact</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="#5" className="navigation__link">
              <a>Follow up links</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
