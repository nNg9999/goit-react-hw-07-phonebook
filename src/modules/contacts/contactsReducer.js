import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

import { toast } from 'react-toastify';
//styles
import 'react-toastify/dist/ReactToastify.css';



const initialContacts = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]


const addContacts = (state, action) => {
  const { name, number } = action.payload;

  if (!name || !number) { toast.error('Please fill the form!') }
  else if (name.length < 3) { toast.error('Name should be more then 3 letters') }
  // else if (state.items.some(contact => contact.name === name)) { toast.info(name + ` is alredy in contacts`) }
  else { return [...state, action.payload] }
  // return [...state, action.payload]

};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload)
};


const items = createReducer(initialContacts, {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactsSuccess]: addContacts,
  [contactsActions.removeContactsSuccess]: removeContact,
})

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
})


// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsActions.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };


const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactsRequest]: () => true,
  [contactsActions.addContactsSuccess]: () => false,
  [contactsActions.addContactsError]: () => false,
  [contactsActions.removeContactsRequest]: () => true,
  [contactsActions.removeContactsSuccess]: () => false,
  [contactsActions.removeContactsError]: () => false,
  [contactsActions.themeRequest]: () => true,
  [contactsActions.themeSuccess]: () => false,
  [contactsActions.themeError]: () => false,
})

// const error = createReducer(null);

export default combineReducers({
  items,
  filter,
  loading,

})



// addContacts = (name, number) => {
//   const { contacts } = this.state
//   const newContact = { name, number, id: uuidv4(), }

//   if (!name || !number) { return toast.error('Please fill the form!') }
//   else if (name.length < 3) { toast.error('Name should be more then 3 letters') }
//   else if (contacts.some(contact => contact.name === name)) { toast.info(name + ` is alredy in contacts`) }
//   else { this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] })) }
// };


