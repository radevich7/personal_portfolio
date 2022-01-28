import styles from "./Portfolio.module.scss";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

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
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="reactMeals.webm" type="video/webm" />
                <source src="reactMeals.mp4" type="video/mp4" />
              </video>
              <Link href="/">
                <a className={styles.portfolio__video__link}>
                  <FaArrowCircleRight />
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.portfolio__item__2}>
          <div className={styles.portfolio__hoverContent}>
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="mapty.webm" type="video/webm" />
                <source src="mapty.mp4" type="video/mp4" />
                Your browser is not supported!
              </video>
              <Link href="/">
                <a className={styles.portfolio__video__link}>
                  <FaArrowCircleRight />
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.portfolio__item__3}>
          <div className={styles.portfolio__hoverContent}>
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="mktfy.webm" type="video/webm" />
                <source src="mktfy.mp4" type="video/mp4" />
                Your browser is not supported!
              </video>
              <Link href="/">
                <a className={styles.portfolio__video__link}>
                  <FaArrowCircleRight />
                </a>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.portfolio__item__4}>
          <div className={styles.portfolio__hoverContent}>
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="nexter.mp4" type="video/mp4" />
                <source src="nexter.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
          </div>
        </li>
        <li className={styles.portfolio__item__5}>
          <div className={styles.portfolio__hoverContent}>
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="natours.mp4" type="video/mp4" />
                <source src="natours.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
          </div>
        </li>
        <li className={styles.portfolio__item__6}>
          <div className={styles.portfolio__hoverContent}>
            <div className={styles.portfolio__video}>
              <video
                className={styles.portfolio__video__content}
                loop
                autoPlay
                muted
              >
                <source src="meetups.mp4" type="video/mp4" />
                <source src="meetups.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
