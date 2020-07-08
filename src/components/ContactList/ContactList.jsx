import React from 'react';
import { string, number, arrayOf, exact } from 'prop-types';


import ContactListItem from "../ContactListItem/ContactListItem.Container";
// redux
import { connect } from "react-redux";
import contactsSelectors from "../../modules/contacts/contactsSelectors";
// import contactsActions from "../../redux/contacts/contactsActions";
// import contactsActions from "../../modules/contacts/contactsActions";

// styles
import styles from '../ContactList/ContactList.module.scss';

const ContactList = ({ contacts }) => {
  // console.log('ContactList re-render');

  return (
    <ul className={styles.contactList}>

      {contacts.map(({ id }) =>
        <ContactListItem key={id} id={id} />
      )}

    </ul>
  )
};

ContactList.defaultProps = {};

ContactList.propTypes = {
  contacts: arrayOf(exact({
    id: number.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  })).isRequired,

};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVC(state),
})
// {
//   const { items, filter } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
//   return {
//     contacts: visibleContacts,
//   };
// };



export default connect(mapStateToProps)(ContactList);
