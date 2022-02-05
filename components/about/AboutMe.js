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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aliquid eius quaerat, repellendus ad in possimus sequi pariatur est
            minus amet placeat perferendis animi impedit quibusdam cumque fugiat
            numquam suscipit. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloribus aliquid eius quaerat, repellendus ad in
            possimus sequi pariatur est minus amet placeat perferendis animi
            impedit quibusdam cumque fugiat numquam suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
