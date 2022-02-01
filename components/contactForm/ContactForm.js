import styles from "./ContactForm.module.scss";

const MyTextInput = { label, ...props };

const ContactForm = () => {
  return (
    <section className={styles.form}>
      <h1 className={styles.form__heading1}>Send me a message!</h1>
      <h2 className={styles.form__heading2}>
        Got a question or proposal, or just want ot say hello? Go ahead!
      </h2>
    </section>
  );
};

export default ContactForm;
