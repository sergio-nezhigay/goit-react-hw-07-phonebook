import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  createContact,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [createContact.fulfilled]: (state, action) => {
    const createdContact = action.payload;
    state.push(createdContact);
    return state;
  },
  [deleteContact.fulfilled]: (state, action) => {
    const deletedContactId = action.payload;
    return state.filter(contact => contact.id !== deletedContactId);
  },
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [createContact.pending]: () => true,
  [createContact.fulfilled]: () => false,
  [createContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
  [createContact.rejected]: (_, action) => action.payload,
  [createContact.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
