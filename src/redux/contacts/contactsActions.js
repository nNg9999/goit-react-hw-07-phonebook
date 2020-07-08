
import { v4 as uuidv4 } from 'uuid';
import contactsType from '../contacts/contactsType.js'


const addContacts = (name, number) => ({
  type: contactsType.ADD,
  payload: {
    contacts: {
      name,
      number,
      id: uuidv4(),
    },
  },
});

const removeContact = (contactId) => ({
  type: contactsType.REMOVE,
  payload: {
    contactId,
  },
});


const changeFilter = filter => ({
  type: contactsType.CHANGE_FILTER,
  payload: {
    filter,
  },
});


export default {
  addContacts,
  removeContact,
  changeFilter,
}