import SkillsList from "./SkillsList";
import styles from "./Skills.module.scss";
const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.content}>asdas</div>
      <div className={styles.stack}>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
