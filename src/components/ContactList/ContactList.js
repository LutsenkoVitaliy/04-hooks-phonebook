import PropTypes from "prop-types";
import './ContactList.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">{contacts.map(contact =>
  <li key={contact} className="ContactList__item">
    <p className="ContactList__text">{contact}</p>
      <button onClick={() => onDeleteContact(contact)} className="ContactList__button">deleted</button>
  </li>)}</ul>       
);
  
export default ContactList
      
  
