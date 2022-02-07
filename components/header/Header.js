import styles from "./Header.module.scss";
import Button from "../reusableComponents/Button";
import ScrollTo from "react-scroll-into-view";

const Header = () => {
  let hello = "Hello,";
  let me = `I'm`;
  let firstName = "ulian ";
  let lastName = "Radevych";
  let position = "web developer";

  // unique key for mapping
  const generateKey = (val) => {
    return `${val}_${new Date().getTime()}`;
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <h1>
          {[...hello].map((val, index) => (
            <span key={generateKey(val + index)}>{val}</span>
          ))}
        </h1>
        <h1>
          {[...me].map((val, index) => (
            <span key={generateKey(val + index)}>{val}</span>
          ))}{" "}
          <span className={styles.header__main__special}>J</span>
          {[...firstName].map((val, index) => (
            <span key={generateKey(val + index)}>{val}</span>
          ))}
          {[...lastName].map((val, index) => (
            <span key={generateKey(val + index)}>{val}</span>
          ))}
        </h1>
        <h1>
          {[...position].map((val, index) => (
            <span key={generateKey(val + index)}>{val}</span>
          ))}
        </h1>

        <ScrollTo selector="#contactForm">
          <Button>Contact me</Button>
        </ScrollTo>
      </div>
      <span className={styles.header__quote}>
        “The beautiful thing about learning is that nobody can take it away from
        you.” ― B.B. King
      </span>

      {/* background structure of the html */}
      <div className={styles.back__scheme}>
        <span className={styles.back__scheme__html}>&lt; html &gt;</span>
        <span className={styles.back__scheme__header}>&lt; header &gt;</span>
        <span className={styles.back__scheme__body}>&lt; body &gt;</span>
        <span className={styles.back__scheme__headerClose}>
          &lt;/ header &gt;
        </span>
      </div>

      {/* background structure of the html */}
    </header>
  );
};

export default Header;
