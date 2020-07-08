import React from 'react';
// import { string, arrayOf, exact, func } from 'prop-types';


// styles
import styles from '../ContactList/ContactList.module.scss';

const ContactListItem = ({ name, number, onRemove }) => {
  return (

    <li> {name}: {number}
      <section >
        <button type="submit" className={styles.button} onClick={onRemove}>Delete</button>
      </section>
    </li>

  )
};

ContactListItem.defaultProps = {};

// ContactListItem.propTypes = {
//   contacts: arrayOf(exact({
//     id: string.isRequired,
//     name: string.isRequired,
//     number: string.isRequired,
//   })).isRequired,
//   onRemove: func.isRequired,
// };

// const mapStateToProps = (state, ownProps) => {
//   // console.log(state);
//   // console.log(ownProps);

//   // const item = state.contacts.items.find(item => item.id === ownProps.id)
//   const item = contactsSelectors.getItems(state).find(item => item.id === ownProps.id)
//   // console.log(item);

//   return { ...item }
// };


// const mapState = (state, ownProps) => {
//   const contacts = contactsSelectors.getItemById(state, ownProps.id);
//   return { ...contacts }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
// })

// export default connect(mapState, mapDispatchToProps)(ContactListItem);
export default ContactListItem;