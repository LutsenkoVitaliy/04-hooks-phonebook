import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'

class App extends Component {
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ],
   filter: ''
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  

  formSubmitHandler = ({ name, number}) => {
    const normalazedFind = name.toLowerCase()
    const findName = this.state.contacts.find( contact => contact.name.toLowerCase() === normalazedFind );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({contacts}) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  }

   changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  };
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    )};
      
  componentDidMount () {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
    
    return (
      <div className='phonebook_wrap'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter}/>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        /> 
    </div>
    )}
}


export default App;
