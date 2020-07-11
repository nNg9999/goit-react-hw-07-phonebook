// redux
import { connect } from "react-redux";

import ContactListItem from "./ContactListItem";

import contactsOperation from "../../modules/contacts/contactsOperation";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


const mapState = (state, ownProps) => {
  const contacts = contactsSelectors.getItemById(state, ownProps.id);
  return { ...contacts }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperation.removeContact(ownProps.id)),
})

export default connect(mapState, mapDispatchToProps)(ContactListItem);
