import ContactsList from './ContactsList';
import Form from './Form';
import Filter from './Filter';

function App() {
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
