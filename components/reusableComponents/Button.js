import styles from "./Button.module.scss";

const Button = (props) => {
  return <a className={styles.btn}>{props.children}</a>;
};

export default Button;
