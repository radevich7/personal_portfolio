import { useState } from "react";
import styles from "./ContactForm.module.scss";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "animate.css";
import { BallTriangle } from "react-loader-spinner";
// Emailjs service credentials
const SERVICE_ID = "service_5un9za6";
const TEMPLATE_ID = "template_oj2w0pc";
const USER_ID = "user_nL84NBjg7D93QkB4gd3oe";

//  TEXT input
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

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
// TEXTAREA input
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

// CONTACT FORM

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const sendEmail = async (data) => {
    setLoading(true);
    const sendData = () =>
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
        function (response) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDownBig",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUpBig",
            },
            color: "#ffffff",
            background: "#072227",
            confirmButtonColor: "#208294",
          });
        },
        function (error) {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title:
              "Ooops, something went wrong, please contact me directly at radevich7@gmail.com",

            showClass: {
              popup: "animate__animated animate__fadeInDownBig",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUpBig",
            },
            color: "#ffffff",
            background: "#072227",
            confirmButtonColor: "#208294",
          });
        }
      );
    sendData();
    return sendData;
  };

  return (
    <section className={styles.form}>
      <h1 className={styles.form__heading1}>Send me a message!</h1>
      <h2 className={styles.form__heading2}>
        Got a question or proposal, or just want to say hello? Go ahead!
      </h2>
      {loading ? (
        <div className={styles.spinner}>
          <BallTriangle
            heigth="150"
            width="150"
            color="#208294"
            ariaLabel="loading"
          />
        </div>
      ) : (
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
            // Delete input fields after the message send
            sendEmail(values).then(() => resetForm({ values: "" }));
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
      )}
    </section>
  );
};

export default ContactForm;
