import Navigation from "./Navigation";
import styles from "./Layout.module.scss";
import { Fragment } from "react";
const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
