import styles from "./Header.module.scss";
import Button from "../reusableComponents/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <h1>Hello, </h1>
        <h1>
          I'm <span className={styles.header__main__special}>J</span>ulian
          Radevych,
        </h1>
        <h1>web developer</h1>
        <Button>Contact me</Button>
        <span className={styles.header__quote}>
          “The future belongs to those who believe in the beauty of their
          dreams.”—Eleanor Roosevelt.
        </span>
      </div>

      {/* background structure of the html */}
      <div className={styles.back__scheme}>
        <span className={styles.back__scheme__html}>&lt; html &gt;</span>
        <span className={styles.back__scheme__header}>&lt; header &gt;</span>
      </div>

      {/* background structure of the html */}
    </header>
  );
};

export default Header;
