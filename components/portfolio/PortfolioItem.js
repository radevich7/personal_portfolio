import styles from "./Portfolio.module.scss";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";

const PortfolioItem = (props) => {
  return (
    <li className={props.project.style}>
      <div className={styles.portfolio__hoverContent}>
        <div className={styles.portfolio__video}>
          <video
            className={styles.portfolio__video__content}
            loop
            autoPlay
            muted
          >
            <source src={props.project.mp4} type="video/webm" />
            <source src={props.project.webm} type="video/mp4" />
          </video>

          <Link href={props.project.url}>
            <a className={styles.portfolio__video__link}>
              <FaExternalLinkSquareAlt />
            </a>
          </Link>
        </div>
        <Link href={props.project.url}>
          <a className={styles.portfolio__hoverLink}>
            <span>visit</span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default PortfolioItem;
