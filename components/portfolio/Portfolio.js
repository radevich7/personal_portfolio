import styles from "./Portfolio.module.scss";
import React, { forwardRef } from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = (props, ref) => {
  // prettier-ignore
  const projects = [
    {id: 1, mp4: "mktfy.mp4", webm: "mktfy.webm", url: "/hello", style: styles.portfolio__item__1,photoUrl:'/mktfy.svg'},
    {id: 2, mp4: "reactMeals.mp4", webm: "reactMeals.webm", url: "/", style: styles.portfolio__item__2, photoUrl:'/reactMeals.svg'},
    {id: 3, mp4: "nexter.mp4", webm: "nexter.webm", url: "/", style: styles.portfolio__item__3,photoUrl:'/nexter.svg'},
    {id: 4, mp4: "mapty.mp4", webm: "mapty.webm",url: "/", style: styles.portfolio__item__4,photoUrl:'/mapty.svg'},
    {id: 5, mp4: "bankist.mp4", webm: "bankist.webm", url: "/", style: styles.portfolio__item__5,photoUrl:'/bankist.svg'},
    {id: 6, mp4: "meetups.mp4", webm: "meetups.webm", url: "/", style: styles.portfolio__item__6,photoUrl:'/meetups.svg'},
    {id: 7, mp4: "natours.mp4", webm: "natours.webm", url: "/", style: styles.portfolio__item__7,photoUrl:'/natours.svg'},
    {id: 8, mp4: "pigGame.mp4", webm: "pigGame.webm", url: "/", style: styles.portfolio__item__8,photoUrl:'/piggame.svg'},
  ];

  return (
    <section className={styles.portfolio} ref={ref}>
      <h2>Portfolio</h2>
      <p>
        Below you can see some of my projects, that I've been working lately
      </p>
      <ul className={styles.portfolio__container}>
        {projects.map((item) => (
          <PortfolioItem project={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default forwardRef(Portfolio);
