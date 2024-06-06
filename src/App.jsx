import { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import initialContacts from './contacts.json'
import css from './App.module.css'


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : initialContacts
  });
  const [filter, setFilter] = useState('')
  
    useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
    
 
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
     return prevContacts.filter((contact) => contact.id !== contactId )
   })
  };
 const handleFilterChange = (value) => {
        setFilter(value);
    };
  

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
   )
    return (
  <div className={css.totalWrapper}>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
      <SearchBox
        filter={filter}
        onFilter={handleFilterChange}
      />
      <ContactList
        contacts={visibleContacts}
        onDelete={deleteContact}
      />
</div>
  )
}

export default App
