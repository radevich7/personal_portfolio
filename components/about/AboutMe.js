import { Fragment } from "react";
import Image from "next/image";
import styles from "./About.module.scss";

const AboutMe = () => {
  return (
    <div>
      <h1 className={styles.about__zone__heading}>About me</h1>
      <div className={styles.about__zone}>
        <Image
          src="/myPhoto.jpeg"
          className={styles.about__zone__photo}
          width={320}
          height={320}
        ></Image>
        <div className={styles.about__zone__text}>
          <h2>Julian Radevych</h2>
          <h4>Front-End Developer</h4>
          <p>
            {" "}
            I'm a Front-End Developer located in Canada. I am passionate about
            building interactive, eye-catching, accessible applications and
            digital experiences. I enjoy coding and solve problems through code,
            and I am excited to work alongside with the other amazing
            developers. My abundant energy fuels me in the pursuit of many
            interests, hobbies and areas of study. I'm a fast learner, able to
            pick up new skills and juggle different projects in a fast-paced
            environment. Out of the computer desk you'll find me hiking with my
            wife, fishing and watching movies. I love travelling, taste and try
            new things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
