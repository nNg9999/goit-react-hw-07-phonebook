import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

import { toast } from 'react-toastify';
//styles
import 'react-toastify/dist/ReactToastify.css';


const initialState = {

  items: [],
  filter: '',
  loading: false,
  errorMessage: '',
};

const addContacts = (state, { payload }) => {
  return [...state, payload]
};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload)
};


const items = createReducer(initialState.items, {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactsSuccess]: addContacts,
  [contactsActions.removeContactsSuccess]: removeContact,
})

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
})

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



