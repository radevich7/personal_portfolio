import styles from "./Button.module.scss";
import Link from "next/link";
const Button = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
