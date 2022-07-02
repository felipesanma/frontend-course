import React, { useEffect, useState } from "react";
import "./styles.css";



const App = () => {
  /*const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
    { name: "Pipe", email: "pipe@people.poll", age: 28 }
  ];
  */
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log('usando useEffect solo una vez');
    fetch("https://randomuser.me/api/?results=4")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
        console.log(data.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first}
          email={contact.email}
          age={contact.dob.age}
          key={contact.registered.date}
        />
      ))}
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};



export default App;