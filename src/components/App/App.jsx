import { useEffect } from 'react';
import { useFavicon, useTitle } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Filler } from './App.styled';

import {
  ContactList,
  ContactForm,
  Section,
  Filter,
  Loader,
  Container,
} from 'components';

import addressIcon from '../../assets/images/icons8-address-book-32.png';

export function App() {
  const dispatch = useDispatch();
  useTitle('Phonebook');
  useFavicon(addressIcon);
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(contactsOperations.fetchContacts());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Loader />
      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Filler></Filler>
      )}
    </Container>
  );
}
