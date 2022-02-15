import styles from "./Header.module.scss";
import ScrollTo from "react-scroll-into-view";

// component
import Button from "../reusableComponents/Button";
import ParticlesAnimation from "../animation/ParticlesAnimation";

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
      <ParticlesAnimation />
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

        <ScrollTo selector="#contactForm" className={styles.header__main__btn}>
          <Button>Contact me</Button>
        </ScrollTo>
      </div>
      <span className={styles.header__quote}>
        “The beautiful thing about learning is that nobody can take it away from
        you.” ― B.B. King
      </span>

      {/* background structure of the html */}
      <div className={styles.back__scheme}>
        <span className={styles.back__scheme__html}>{`< html >`}</span>
        <span className={styles.back__scheme__header}>{`< header >`}</span>
        <span className={styles.back__scheme__body}>{`< body >`}</span>
        <span className={styles.back__scheme__headerClose}>
          {`</ header >`}
        </span>
      </div>

      {/* background structure of the html */}
    </header>
  );
};

export default Header;
