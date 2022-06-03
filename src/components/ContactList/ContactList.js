import { ContactListStyled } from "./ContactListStyled";

const ContactList = ({ contactsInState, OnDeleteContact, filter }) => {
  const visibleContacts = contactsInState.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <ContactListStyled className="Contact">
      <label>Contact list:</label>
      <ul className="Contact__list">
        {visibleContacts.map((contact) => (
          <li key={contact.id} className="Contact__item">
            <p className="Contact__text">
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className="Contact__button"
              onClick={() => OnDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactListStyled>
  );
};

export default ContactList;
