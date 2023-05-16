import axios from 'axios';

axios.defaults.baseURL = 'https://6460b47ffe8d6fb29e35717a.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
