import Link from "next/link";
import styles from "./Navigation.module.scss";

// components
import CollapseNav from "./CollapseNav";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      {/* FullScreen nav */}
      <div className={styles.nav__fullScreenNav}>
        <div className={styles.nav__logo}>
          <Link href="/">
            <a className={styles.nav__logo__element1}>J</a>
          </Link>
          <span className={styles.nav__logo__element2}>Julian</span>
          <span className={styles.nav__logo__element3}>Web Developer</span>
        </div>

        <NavLinks />
      </div>
      {/* Collapse nav */}
      <CollapseNav />
    </div>
  );
};

export default Navigation;
