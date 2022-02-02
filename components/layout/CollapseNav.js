import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useState } from "react";
const CollapseNav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className={styles.nav__collapse}>
      <input
        type="checkbox"
        className={styles.nav__collapse__checkbox}
        id="navi-toggle"
      />
      <label
        htmlFor="navi-toggle"
        onClick={toggle}
        className={styles.nav__collapse__button}
      >
        <span
          className={`${styles.nav__collapse__icon} ${
            open && styles.middleLine
          }`}
        >
          &nbsp;
        </span>
      </label>

      <div
        className={`${styles.nav__collapse__background} ${
          open && styles.toggleBack
        }`}
      >
        &nbsp;
      </div>
      <nav
        className={`${styles.nav__collapse__navigation} ${
          open && styles.toggleNav
        }`}
      >
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <Link href="/about">
              <a className={styles.nav__list__link} onClick={toggle}>
                About me
              </a>
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link href="/skills">
              <a className={styles.nav__list__link} onClick={toggle}>
                Skills
              </a>
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link href="/portfolio">
              <a className={styles.nav__list__link} onClick={toggle}>
                Portfolio
              </a>
            </Link>
          </li>

          <li className={styles.nav__list__item}>
            <Link href="/contact">
              <a className={styles.nav__list__link} onClick={toggle}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CollapseNav;
