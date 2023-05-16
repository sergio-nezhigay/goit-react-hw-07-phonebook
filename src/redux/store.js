import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contacts/contactsReducer';
import { contactsReducer } from './contactsSlice';
// import filterReducer from './filter/filterReducer';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
