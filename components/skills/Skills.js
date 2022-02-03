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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          cumque nulla est ea quia odio veritatis ipsum officia, perspiciatis in
          quidem corporis, necessitatibus totam porro similique ipsam unde
          officiis et. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Debitis, amet in assumenda nobis numquam optio aspernatur voluptate
          dolor reiciendis, labore odit quam enim quia omnis exercitationem.
          Exercitationem cupiditate suscipit modi.
        </p>
      </div>
      <div className={styles.skills__stack}>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
