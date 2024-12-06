import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      toast.error(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts([...contacts, newContact]);
    toast.success(`Contact ${newContact.name} added successfully!`);
  };

  const deleteContact = (id) => {
    const deletedContact = contacts.find(contact => contact.id === id);
    if (deletedContact) {
      setContacts(contacts.filter(contact => contact.id !== id));
      toast.success(`Contact ${deletedContact.name} deleted successfully!`);
    } else {
      toast.error("Contact not found!");
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={styles.subtitle}>Find contacts by name</h2>
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      <ToastContainer />
    </div>
  );
};

export default App;
