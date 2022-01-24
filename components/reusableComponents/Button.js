import styles from "./Button.module.scss";
import Link from "next/link";
const Button = (props) => {
  return (
    <Link href="/">
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
