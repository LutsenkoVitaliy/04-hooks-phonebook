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

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value})
  }

  render() {
    const { contacts, name, number } = this.state
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          nameValue={name}
          onChange={this.handleChange}
          numberValue={number}
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
