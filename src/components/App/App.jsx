import { useEffect } from 'react';
import { useFavicon, useTitle } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import addressIcon from '../../assets/images/icons8-address-book-32.png';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

import { ContactList, ContactForm, Section, Filter } from 'components';
import { Container } from 'components';

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
