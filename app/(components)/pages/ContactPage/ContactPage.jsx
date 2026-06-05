import ContactInfo from "./sections/ContactInfo";
import ContactQuestion from "./sections/ContactQuestion";

const ContactPage = ({ contactData }) => {
  return (
    <main>
      <ContactInfo data={contactData?.contactInfo} />
      <ContactQuestion data={contactData?.contactQuestion} />
    </main>
  );
};

export default ContactPage;
