import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';


import { useState } from 'react';

import initialContacts from './contacts.json'


import './App.css'

const App = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [filter, setFilter] = useState('')

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
  <div>
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
