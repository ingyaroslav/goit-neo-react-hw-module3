import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'

function App() {

  const [contacts, setContacts] = useState(() =>
  JSON.parse(localStorage.getItem('contacts')) || []
  )
  
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setFilteredContacts(contacts);
  }, [contacts])
  
  const handleSearchChange = ({target: {value}}) => {
    setSearchValue(value);
    if (value === '') {
      setFilteredContacts(contacts);      
    } else {
      const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredContacts(filteredContacts);
    }
  };
  
  const handleSubmit = ({ name, number }, handleFunctions) => {  
    setContacts([...contacts, { "id": nanoid(), "name": name, 'number': number }])   
    handleFunctions.resetForm();
  };
  
  const handleDelete = (id) => {   
    setContacts(contacts.filter(contact => contact.id !== id))
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit = {handleSubmit}/>
      <SearchBox handleSearchChange = {handleSearchChange} searchValue={searchValue}/>
      {contacts.length > 0 && (
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      )}
    </div>)
}

export default App