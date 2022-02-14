import './App.css';
import contactsInfo from "./contacts.json";
import {useState} from 'react';



function App() {
  const [contacts, setContacts] =useState(contactsInfo.slice(0,5));

  const handleRandom =() => {
    const random = contactsInfo[Math.floor(Math.random() * contactsInfo.length)];
    setContacts([...contacts, random]);
  }

  const sortName =() => {
    let sortedByName = contacts.sort ((a, b) => a.name.localeCompare(b.name));
    setContacts((contacts) =>
    [...sortedByName]);

  } 

  const sortPopularity =() => {
    let sortedByPopularity = contacts.sort ((a, b) => a.popularity-b.popularity);
    setContacts((contacts) =>
    [...sortedByPopularity]);

  } 

  const deleteContacts =() => {
    const filteredContacts = contacts.filter(contact => {
      return contact._id !== contact._Id;
    });
 
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={handleRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>

      {contacts.map((contact) => {
      return (
        
       <table key= {contact.id}>
          <tr>
              <th>Picture</th><img src={contact.pictureUrl} alt="contact image" id="contactImage"/>
              <th>Name</th><p>{contact.name}</p>
              <th>Popularity</th>{contact.popularity}
              <th>Won Oscar</th>{contact.wonOscar} 
              <th>Won Emmy</th>{contact.wonEmmy}
              <button onClick={() => deleteContacts(contacts._id)} className="btn-delete">
              Delete 
            </button>
          </tr>
        </table>
        )
      })}
    </div>
  );
}

export default App;
