import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = e => setFilter(e.target.value);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      return toast.info(`${name} is already in contacts`);
    }
    setContacts(state => [newContact, ...state]);
  };

  const deleteContact = contactId =>
    setContacts(state => state.filter(({ id }) => id !== contactId));

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Box p={4}>
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm onSubmit={addContact} />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter filter={filter} onChange={handleChangeFilter} />

      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};

export default App;
