import { combineReducers } from 'redux';
import contactsType from '../contacts/contactsType';


// import { toast } from 'react-toastify';
// //styles
// import 'react-toastify/dist/ReactToastify.css';

// {
//   contacts: {
//     items: [],
//       filter: '',
//   },
// }
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case contactsType.ADD:
      return [...state, payload.contacts];

    case contactsType.REMOVE:
      return state.filter(({ id }) => id !== payload.contactId);


    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case contactsType.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
})



// addContacts = (name, number) => {
//   const { contacts } = this.state
//   const newContact = { name, number, id: uuidv4(), }

//   if (!name || !number) { return toast.error('Please fill the form!') }
//   else if (name.length < 3) { toast.error('Name should be more then 3 letters') }
//   else if (contacts.some(contact => contact.name === name)) { toast.info(name + ` is alredy in contacts`) }
//   else { this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] })) }
// };


