import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import Loading from "./../loadingScreen/Loading";

const PortfolioVideo = dynamic(() => import("./PortfolioVideo"), {
  loading: () => <Loading />,
});

const PortfolioItem = (props) => {
  const [hovered, setHovered] = useState(false);
  const redirectHandler = () => {
    const win = window.open(props.project.url, "_blank");
    win.focus();
  };

  return (
    <li
      className={props.project.style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.portfolio__hoverContent} onClick={redirectHandler}>
        <Image
          src={props.project.photoUrl}
          layout="fill"
          className={styles.portfolio__image}
          alt="Project's poster"
        />

        <div className={styles.portfolio__video}>
          {hovered && (
            <PortfolioVideo
              mp4Url={props.project.mp4}
              webmUrl={props.project.webm}
              loadVideo={hovered}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
