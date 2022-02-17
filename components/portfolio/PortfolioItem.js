import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.scss";

// icon
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const PortfolioItem = (props) => {
  return (
    <li className={props.project.style}>
      <div className={styles.portfolio__hoverContent}>
        <Image
          src={props.project.photoUrl}
          layout="fill"
          className={styles.portfolio__image}
          alt="Project's poster"
        />
        <div className={styles.portfolio__video} onClick={redirectHandler}>
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

          {/* <Link href={props.project.url}>
            <a className={styles.portfolio__video__link} target="_blank">
              <FaExternalLinkSquareAlt />
            </a>
          </Link> */}
        </div>
        <Link href={props.project.url}>
          <a className={styles.portfolio__hoverLink} target="_blank">
            <span>visit</span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default PortfolioItem;
