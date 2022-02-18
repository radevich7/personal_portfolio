import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.scss";

const PortfolioItem = (props) => {
  const redirectHandler = () => {
    const win = window.open(props.project.url, "_blank");
    win.focus();
  };
  return (
    <li className={props.project.style}>
      <div className={styles.portfolio__hoverContent} onClick={redirectHandler}>
        <Image
          src={props.project.photoUrl}
          layout="fill"
          className={styles.portfolio__image}
          alt="Project's poster"
        />
        <div className={styles.portfolio__video}>
          <video
            className={styles.portfolio__video__content}
            loop
            autoPlay
            muted
            preload="none"
          >
            <source src={props.project.mp4} type="video/webm" />
            <source src={props.project.webm} type="video/mp4" />
          </video>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
