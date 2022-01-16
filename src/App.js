import React, { Component } from 'react'

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
 state = {
  contacts: [],
  name: '',
  // number: ''
}
  
  render() {
    const { contacts } = this.state
    
    return (
      <div>
        <h1>Phonebook</h1>
         <ContactForm />
        
        <h2>Contacts</h2>
        <ContactList contacts={contacts} /> 
    </div>
    )}
}


export default App;
