import './App.css';
import contactsInfo from "./contacts.json";
import {useState} from 'react';



function App() {
  const [contacts, setContacts] =useState(contactsInfo.slice(0,5));

  const handleRandom =() => {

    const addRandomContact = () => {
    const random = contactsInfo[Math.floor(Math.random() * contactsInfo.lenght)]
     return random;
    }
      if (contacts.includes(addRandomContact().id)) {
        addRandomContact();
      }else{
        contacts.push(addRandomContact())
        setContacts(contacts)
      }

  }
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={handleRandom}>Add Random Contact</button>

      {contacts.map((contact) => {
      return (
        
       <table key= {contact.id}>
          <tr>
              <th>Picture</th><img src={contact.pictureUrl} alt="contact image" id="contactImage"/>
              <th>Name</th><p>{contact.name}</p>
              <th>Popularity</th>{contact.popularity}
              <th>Won Oscar</th>{contact.wonOscar} 
              <th>Won Emmy</th>{contact.wonEmmy}
          </tr>
        </table>
        )
      })}
    </div>
  );
}

export default App;
