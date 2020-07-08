//redux
import { connect } from "react-redux";

import ContactForm from "./ContactForm";

import contactsOperation from "../../modules/contacts/contactsOperation";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


// const ContactFormContainer = (props) => {
//   return (
//     <ContactForm {...props} />
//   )
// }

const mapState = (state) => {
  const contacts = contactsSelectors.getItems(state);
  return { ...contacts }
}

const mapDispatchToProps = {
  onAddContact: contactsOperation.addContacts,
}

export default connect(mapState, mapDispatchToProps)(ContactForm);

