import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ isDuplicate, setIsDuplicate ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate === false) {
      props.newContact(name, number, email);
      setName('');
      setNumber('');
      setEmail('');
    }
  };

  // unsure if below is correct
  useEffect(() => {
    const contactNames = props.contacts.map(contact => contact.name);
    if (contactNames.includes(name)) {
      setIsDuplicate(true);
      alert('Contact with that name already exists.')
    }
    else {
      setIsDuplicate(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName}
          number={number}
          setNumber={setNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts} />
      </section>
    </div>
  );
};
