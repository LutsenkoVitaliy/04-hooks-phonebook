import PropTypes from "prop-types";
import './ContactForm.css'

const ContactForm = ({nameValue, numberValue, onChange}) => (
  <div>
    <p>Name</p>
      <input
      type="text"
      value={nameValue}
      onChange={onChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <p>Number</p>
    <input
      type="tel"
      value={numberValue}
      onChange={onChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    
      <button className="addContact__button" type='button'>Add contact</button>
  </div>
                    
        
);
  
export default ContactForm
      
  
