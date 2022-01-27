import styles from "./Portfolio.module.scss";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <p>
        Below you can see some of my projects, that I've been working lately
      </p>

      <ul className={styles.portfolio__container}>
        <li className={styles.portfolio__item__1}>
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
        <li className={styles.portfolio__item__2}>
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
        <li className={styles.portfolio__item__3}>
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
        <li className={styles.portfolio__item__4}>
          {" "}
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
        <li className={styles.portfolio__item__5}>
          {" "}
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
        <li className={styles.portfolio__item__6}>
          {" "}
          <img
            className={styles.portfolio__image}
            src="/MKTFY.png"
            alt="Picture of the project 1"
          />
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
