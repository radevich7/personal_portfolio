import styles from "./ContactForm.module.scss";
import * as Yup from "yup";
import { Formik, Form, useField, useFormikContext } from "formik";
import Button from "../reusableComponents/Button";
// Input
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  return (
    <>
      <input {...field} {...props} className={styles.form__input} />
      {meta.touched && meta.error ? (
        <div className={styles.form__error}>{meta.error}</div>
      ) : null}
      <label htmlFor={props.id || props.name} className={styles.form__label}>
        {label}
      </label>
    </>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea {...field} {...props} className={styles.form__textArea} />
      {meta.touched && meta.error ? (
        <div className={styles.form__error}>{meta.error}</div>
      ) : null}
      <label htmlFor={props.id || props.name} className={styles.form__label}>
        {label}
      </label>
    </>
  );
};

const ContactForm = () => {
  return (
    <section className={styles.form}>
      <h1 className={styles.form__heading1}>Send me a message!</h1>
      <h2 className={styles.form__heading2}>
        Got a question or proposal, or just want to say hello? Go ahead!
      </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string(25, "Must be 15 characters or less").required(
            "Required"
          ),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          message: Yup.string(250, "Must be 250 characters or less").required(
            "Required"
          ),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        <Form className={styles.form__container}>
          <div className={styles.form__container__name}>
            <MyTextInput
              label="Full Name"
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              className={styles.form__input__name}
            />
          </div>
          <div className={styles.form__container__email}>
            <MyTextInput
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className={styles.form__container__message}>
            <MyTextArea
              label="Message"
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
              cols="50"
            />
          </div>

          <button type="submit" className={styles.form__container__btnSubmit}>
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
