import styles from "./Portfolio.module.scss";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

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
              <GoLinkExternal />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
