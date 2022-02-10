import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'

export default function App () {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? []
    // изначальное состояние констактов с localstorage вместо :
    // componentDidMount () {
    //   const contacts = localStorage.getItem('contacts')
    //   const parsedContacts = JSON.parse(contacts)
    //   if (parsedContacts) {
    //     this.setState({ contacts: parsedContacts })
    //   }
    // }
  });
  const [filter, setFilter] = useState('');

  // deleteContact = contactId => {
  // this.setState(prevState => ({
  //   contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  //   }));
  // };
  const deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  

  // formSubmitHandler = ({ name, number}) => {
  //   const normalazedFind = name.toLowerCase()
  //   const findName = this.state.contacts.find( contact => contact.name.toLowerCase() === normalazedFind );
  //   if (findName) {
  //     return alert(`${name} is already in contacts.`);
  //   }

  //   this.setState(({contacts}) => ({
  //     contacts: [{ name, number, id: nanoid() }, ...contacts],
  //   }));
  // }
  const formSubmitHandler = (name, number) => {
    const normalazedFind = name.toLowerCase()
    const findName = this.state.contacts.find( contact => contact.name.toLowerCase() === normalazedFind );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({contacts}) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  }

  //  changeFilter = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value })
  // };
   const changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  };
  
  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => 
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   )};
  const getVisibleContacts = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    )};
      

  //   componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts)
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  // }
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])
  

  return (
      <div className='phonebook_wrap'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler}/>
        
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter}/>
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        /> 
    </div>
    )
}




