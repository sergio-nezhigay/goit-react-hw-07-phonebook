import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/filterSelectors';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const filteredContactsSelector = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts.sort((a, b) => {
      return b.id - a.id;
    });
  }
);
