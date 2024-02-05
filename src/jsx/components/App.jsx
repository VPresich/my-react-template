import { useState } from 'react';
import './App.css';
import ContactList from './contacts-list/ContactsList';
import contactsData from './contacts-list/contacts-data';

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  //   const [filter, setFilter] = useState('');

  //   // Додаємо новий контакт до списку
  //   const handleAddContact = newContact => {
  //     setContacts(prevContacts => [
  //       ...prevContacts,
  //       { ...newContact, id: Date.now() },
  //     ]);
  //   };

  // Видаляємо контакт за його ідентифікатором
  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  // Фільтрація контактів за ім'ям
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <div>
      <h1>Contacts App</h1>
      {/* <ContactForm onAddContact={handleAddContact} />
      <label>
        Filter by Name:
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </label> */}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
