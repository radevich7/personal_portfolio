import styles from "./AboutPersonal.module.scss";
const AboutPersonal = (props) => {
  const generateKey = (val) => {
    return `${val}_${new Date().getTime()}`;
  };
  return (
    <div className={styles.personal}>
      <h3 className={styles.personal__heading}>{props.title}</h3>
      <div className={styles.personal__container}>
        {props.items.map((val, index) => (
          <span
            className={
              props.style
                ? `${styles.personal__icon}`
                : `${styles.personal__lang}`
            }
            key={generateKey(val + index)}
          >
            {val.name}
            <span className={styles.personal__text}>{val.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutPersonal;
