import css from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useId } from 'react';

function App() {
  const [contactsArr, setContactsArr] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    return savedContacts !== null && savedContacts.length !== 0
      ? savedContacts
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const newContactId = useId();
  const [searchValue, setSearchValue] = useState('');

  const filterContacts = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddContact = newContact => {
    setContactsArr(prevContacts => [
      ...prevContacts,
      { ...newContact, id: newContactId },
    ]);
  };

  const handleDeleteContact = id => {
    setContactsArr(prevContact =>
      prevContact.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contactsArr));
  }, [contactsArr]);

  return (
    <div className={css.boxApp}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList
        contactsArr={filterContacts}
        setContactsArr={setContactsArr}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
