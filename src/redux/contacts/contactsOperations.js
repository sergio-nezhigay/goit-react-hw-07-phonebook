import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6460b47ffe8d6fb29e35717a.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/`, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// axios.defaults.baseURL = 'https://6460b47ffe8d6fb29e35717a.mockapi.io/';

// export async function fetchContacts() {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// }

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as mockAPI from 'services/mockAPI';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await mockAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
