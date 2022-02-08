import { useState } from "react";
import styles from "./Navigation.module.scss";
// component
import NavLinks from "./NavLinks";

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
        <NavLinks toggle={toggle} />
      </nav>
    </div>
  );
};

export default CollapseNav;
