import axios from 'axios';
import contactsActions from "./contactsActions";




axios.defaults.baseURL = "http://localhost:2000";


// делаем операцию
const addContacts = (name, number) => dispatch => {
  dispatch(contactsActions.addContactsRequest()); // loading

  axios.post('/contacts', { name, number })
    .then(res => {      // console.log(res);
      dispatch(contactsActions.addContactsSuccess(res.data));
    })
    .catch(error => dispatch(contactsActions.addContactsError(error)));
};


const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest()); // loading

  axios.get('/contacts')
    .then(({ data }) => { console.log(data); dispatch(contactsActions.fetchContactsSuccess(data)); })
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));

}

const removeContact = (id) => dispatch => {
  dispatch(contactsActions.removeContactsRequest(id)); // loading

  axios.delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactsError(error)));
}


const themeConfig = () => dispatch => {
  dispatch(contactsActions.themeRequest()); // loading

  axios.patch(`/theme`, { isChecked: true })
    .then(({ data }) => dispatch(contactsActions.themeSuccess(data)))
    .catch(error => dispatch(contactsActions.themeError(error)));
}

export default {
  addContacts,
  fetchContacts,
  removeContact,
  themeConfig,
}