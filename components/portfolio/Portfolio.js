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
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/projectNexter1.png"
              alt="Picture of the project 1"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
        <li className={styles.portfolio__item__2}>
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/projectMapty.png"
              alt="Picture of the project 2"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
        <li className={styles.portfolio__item__3}>
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/MKTFY.png"
              alt="Picture of the project 3"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
        <li className={styles.portfolio__item__4}>
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/projectFood.png"
              alt="Picture of the project 4"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
        <li className={styles.portfolio__item__5}>
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/projectNatour.png"
              alt="Picture of the project 5"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
        <li className={styles.portfolio__item__6}>
          <div className={styles.portfolio__hoverContent}>
            <img
              className={styles.portfolio__image}
              src="/projectNext.png"
              alt="Picture of the project 6"
            />
            <Link href="/">
              <a className={styles.portfolio__image__link}>
                <span> View project</span>
              </a>
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
