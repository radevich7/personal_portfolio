import Link from "next/link";
import styles from "./Navigation.module.scss";
import ScrollTo from "react-scroll-into-view";
// components
import CollapseNav from "./CollapseNav";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {/* FullScreen nav */}
      <div className={styles.nav__fullScreenNav}>
        <div className={styles.nav__logo}>
          <ScrollTo selector="#header">
            <a className={styles.nav__logo__element1}>J</a>
          </ScrollTo>
          <span className={styles.nav__logo__element2}>Julian</span>
          <span className={styles.nav__logo__element3}>Web Developer</span>
        </div>

        <NavLinks />
      </div>
      {/* Collapse nav */}
      <CollapseNav />
    </nav>
  );
};

export default Navigation;
