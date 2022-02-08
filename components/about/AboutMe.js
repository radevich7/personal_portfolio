import styles from "./About.module.scss";
// component
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <h1 className={styles.about__zone__heading}>About me</h1>
      <div className={styles.about__zone}>
        <div className={styles.about__zone__photoCon}>
          <Image
            src="/myPhoto.jpeg"
            width={320}
            height={320}
            alt="Photo of me"
          />
        </div>

        <div className={styles.about__zone__text}>
          <h2>Julian Radevych</h2>
          <h4>Front-End Developer</h4>
          <div>
            <p>
              I&lsquo;m a Front-End Developer located in Canada. I am passionate
              about building interactive, eye-catching, accessible applications
              and digital experiences. I enjoy coding and solve problems through
              code, and I am excited to work alongside with the other amazing
              developers.
            </p>
            <p>
              I&lsquo;m a fast learner, able to pick up new skills and juggle
              different projects in a fast-paced environment.
            </p>
            <p>
              Out of the computer desk you&lsquo;ll find me hiking with my wife,
              fishing and watching movies. I love travelling, taste and try new
              things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
