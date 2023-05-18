import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { List, Li, DeleteButton, Text } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const filteredAndMemoedcontacts = useSelector(
    contactsSelectors.filteredContactsSelector
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
