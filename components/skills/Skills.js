import styles from "./Skills.module.scss";

// component
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills__heading}>Skills</h2>
      <div className={styles.skills__content}>
        <p>
          I pivot into the web development industry in the end of 2020. Since
          that time, I was exposed to the multiple projects and technologies,
          that challenged me and help to gain experience and a strong
          foundation. <br />
          <br />
          Recently, I completed Launchpad program by VOG (Calgary, AB), where I
          worked with the other team members to build an online marketplace for
          the resale of goods. This program helped me to advanced my skills and
          learn how to work in Agile work environment.
        </p>
      </div>
      <div className={styles.skills__stack}>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
