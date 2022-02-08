import React, { forwardRef } from "react";
import styles from "./Portfolio.module.scss";

// component
import PortfolioItem from "./PortfolioItem";

const Portfolio = (props, ref) => {
  // prettier-ignore
  const projects = [
    {id: 1, mp4: "mktfy.mp4", webm: "mktfy.webm", url: "https://lucid-morse-db81ee.netlify.app/", style: styles.portfolio__item__1,photoUrl:'/mktfy.svg'},
    {id: 2, mp4: "reactMeals.mp4", webm: "reactMeals.webm", url: "https://goofy-knuth-286fdf.netlify.app/", style: styles.portfolio__item__2, photoUrl:'/reactMeals.svg'},
    {id: 3, mp4: "nexter.mp4", webm: "nexter.webm", url: "https://determined-bartik-d8a5e7.netlify.app/", style: styles.portfolio__item__3,photoUrl:'/nexter.svg'},
    {id: 4, mp4: "mapty.mp4", webm: "mapty.webm",url: "https://clever-mclean-ecfad9.netlify.app/", style: styles.portfolio__item__4,photoUrl:'/mapty.svg'},
    {id: 5, mp4: "bankist.mp4", webm: "bankist.webm", url: "https://modest-nobel-7b2f09.netlify.app", style: styles.portfolio__item__5,photoUrl:'/bankist.svg'},
    {id: 6, mp4: "meetups.mp4", webm: "meetups.webm", url: "https://meetup-app-kappa.vercel.app/", style: styles.portfolio__item__6,photoUrl:'/meetups.svg'},
    {id: 7, mp4: "natours.mp4", webm: "natours.webm", url: "https://vigilant-mayer-d58fe1.netlify.app/#", style: styles.portfolio__item__7,photoUrl:'/natours.svg'},
    {id: 8, mp4: "pigGame.mp4", webm: "pigGame.webm", url: "https://nifty-lamport-e8a24c.netlify.app/", style: styles.portfolio__item__8,photoUrl:'/piggame.svg'},
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
