import { createSelector } from "@reduxjs/toolkit";


const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(filter));
}


const getVC = createSelector([getItems, getFilter], (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
})


const getItemById = createSelector(
  [(state, contactId) => contactId, getItems],
  (contactId, items) => items.find(item => item.id === contactId));

// const getItemById = (state, contactId) => {
//   const items = getItems(state);
//   return items.find(item => item.id === contactId);
// }


export default {
  getItems,
  getVisibleContacts,
  getVC,
  getItemById,
}