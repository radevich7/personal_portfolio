import ContactForm from "../../components/contactForm/ContactForm";

const ContactPage = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingBottom: "-30vh",
      }}
    >
      <ContactForm />
    </div>
  );
};

export default ContactPage;
