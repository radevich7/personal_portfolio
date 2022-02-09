import ContactForm from "../../components/contactForm/ContactForm";
import HeadTitle from "../../components/reusableComponents/HeadTitle";

const ContactPage = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeadTitle />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
