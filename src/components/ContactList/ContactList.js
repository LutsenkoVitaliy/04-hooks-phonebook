import PropTypes from "prop-types";
import './ContactList.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">{contacts.map(contact =>
  <li key={contact.id} className="ContactList__item">
      <p className="ContactList__text">{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)} className="ContactList__button">deleted</button>
  </li>)}</ul>       
);
  
export default ContactList
      
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  }
