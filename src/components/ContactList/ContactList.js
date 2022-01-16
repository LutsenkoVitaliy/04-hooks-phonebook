import PropTypes from "prop-types";

const ContactList = ({ contacts }) => (
  <ul>{contacts.map(contact => <li>{contact}</li>)}</ul>       
);
  
export default ContactList
      
  
