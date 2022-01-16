import PropTypes from "prop-types";

const ContactForm = ( ) => (
  <div>
    <p>Name</p>
      <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      />
      <button type='button'>Add contact</button>
  </div>
                    
        
);
  
export default ContactForm
      
  
