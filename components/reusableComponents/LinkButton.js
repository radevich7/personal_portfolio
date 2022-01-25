import Link from "next/link";
import styles from "./LinkButton.module.scss";
const LinkButton = (props) => {
  return (
    <Link href={props.url}>
      <a className={`${styles.link__button} ${`styles.${props.style}`}`}>
        {props.children}
      </a>
    </Link>
  );
};

export default LinkButton;
