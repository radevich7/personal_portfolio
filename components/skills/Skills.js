import styles from "./Skills.module.scss";
import SkillsList from "./SkillsList";
const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.empty}></div>
      <div className={styles.skills__container}>
        <h3 className={styles.skills__heading}>Skills</h3>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
