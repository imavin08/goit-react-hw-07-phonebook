// import { useState, useEffect } from 'react';
import ContactsList from './ContactsList';
import Form from './Form';
import Filter from './Filter';

function App() {
  // const [contacts, SetContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? ''
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phoneboock</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;
