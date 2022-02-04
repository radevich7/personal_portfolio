import React from "react";
import styles from "./Loading.module.scss";
const Loading = (props) => {
  return (
    <div className={props.loading ? styles.body_loading : styles.none}>
      <div className={styles.logo}>
        <span className={styles.logo__element1}>J</span>
        <span className={styles.logo__element2}>Julian is thinking...</span>
      </div>

      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
