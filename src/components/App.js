import { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    setContacts([...contacts, data]);
  };

  const contactFind = (name) => {
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <Form onSubmit={formSubmitHandler} contactFind={contactFind} />
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList
        filter={filter}
        contactsInState={contacts}
        OnDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
