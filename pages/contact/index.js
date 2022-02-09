import ContactForm from "../../components/contactForm/ContactForm";
import HeadTitle from "../../components/reusableComponents/HeadTitle";

const ContactPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HeadTitle />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
