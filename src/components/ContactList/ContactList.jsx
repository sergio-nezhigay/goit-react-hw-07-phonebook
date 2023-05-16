import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { getFilter } from 'redux/filter/filterSelectors';
import { List, Li, DeleteButton, Text } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const filteredAndMemoedcontacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <List>
      {filteredAndMemoedcontacts.map(({ id, phone, name }) => {
        return (
          <Li key={id}>
            <Text>
              {name}: {phone}
            </Text>
            <DeleteButton onClick={() => onDelete(id)} type="button">
              Delete
            </DeleteButton>
          </Li>
        );
      })}
    </List>
  );
}

export default ContactList;
