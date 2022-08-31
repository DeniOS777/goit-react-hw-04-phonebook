import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
