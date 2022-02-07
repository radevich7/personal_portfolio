import SkillsList from "./SkillsList";
import styles from "./Skills.module.scss";
const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skills__heading}>Skills</h2>
      <div className={styles.skills__content}>
        <p>
          I pivot into the web development industry in the end of 2020. Since
          that time, I was exposed to the multiple projects and technologies,
          that challenged me and help to gain experience and a strong
          foundation. Recently, I completed Launchpad program by VOG (Calgary,
          AB), where I worked with the other team members to build an online
          marketplace for the resale of goods. This program helped me to
          advanced my skills and understand of software development in Agile
          work environment.
          {/* I was so
          hungry to learn coding that I decided to quit from my previous job and
          invest all of my time and effort in order to become web developer. */}
        </p>
      </div>
      <div className={styles.skills__stack}>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
