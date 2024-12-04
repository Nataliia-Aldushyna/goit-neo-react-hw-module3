import { useState, useEffect } from 'react';
import ContactForm from './components/Contact/Contact';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return storedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <SearchBox filter={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
