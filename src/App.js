import React, { Component } from 'react'

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
 state = {
  contacts: ['Oleg', 'Vitaliy'],
  name: '',
  number: ''
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact !== contactId)
    }));
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  
  render() {
    const { contacts } = this.state
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        
        <h2>Contacts</h2>
        <ContactList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        /> 
    </div>
    )}
}


export default App;
