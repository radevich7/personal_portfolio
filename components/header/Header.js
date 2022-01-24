import styles from "./Header.module.scss";
import Button from "../reusableComponents/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <h2>Hi there, I'm </h2>
        <h1>Julian Radevych</h1>
        <h3>web developer</h3>
      </div>
      {/* <Button>Contact me</Button> */}
    </header>
  );
};

export default Header;
