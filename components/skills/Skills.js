import SkillsList from "./SkillsList";
import styles from "./Skills.module.scss";
const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skills__heading}>
        Skills <span>&</span> experience
      </h2>
      <div className={styles.skills__content}>
        <p>
          I got exposed to the coding in 2018, however, I pivot in to the web
          development industry in the end of 2020. I was so hungry to learn
          coding that I decided to quit from my previous job and invest all of
          my time and effort in order to become web developer. Since that time,
          I was exposed to the multiple projects and technologies, that
          challenged me and help to gain experience and a strong knowledge.
        </p>
      </div>
      <div className={styles.skills__stack}>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
