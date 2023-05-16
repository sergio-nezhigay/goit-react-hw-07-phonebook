// change to addCase syntax!!!

import { useEffect } from 'react';
import { useFavicon, useTitle } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import addressIcon from '../../assets/images/icons8-address-book-32.png';

import { contactsOperations } from 'redux/contacts';
import { getContacts, getIsLoading, getError } from 'redux/contactsSlice';

import { ContactList, ContactForm, Section, Filter } from 'components';
import { Container } from 'components';

export function App() {
  const dispatch = useDispatch();
  useTitle('Phonebook');
  useFavicon(addressIcon);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>No contacts</p>
        )}
      </Section>
    </Container>
  );
}
