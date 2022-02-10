import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
 
import './ContactForm.css'

export default function ContactForm({onSubmit}) {
  // state = {
  //   name: '',
  //   number: ''
  // }; 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value })
  // };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value)
        break;
      
      case "number":
        setNumber(value)
        break;
      
      default:
        return;
    }
  }
 
  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.onSubmit(this.state)
  //   this.reset()
  // }
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number)
    reset()
  }

  // reset = () => {
  //   this.setState({ name: '' , number: '' })
  // }
  const reset = () => {
    setName('');
    setNumber('');
  }
  
  return (
    <form className="contactform_wrap"
      onSubmit={handleSubmit}
      autoComplete="off">
    <label className="lable_form">Name</label>
      <input
      type="text"
      value={name}
      onChange={handleChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />

    <label className="lable_form">Number</label>
      <input
      type="tel"
      value={number}
      onChange={handleChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <button className="addContact__button" type='submit'>Add contact</button>
    </form>
    )
}



      
  
