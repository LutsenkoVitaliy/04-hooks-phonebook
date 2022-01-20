import React from "react";
import PropTypes from 'prop-types'

import './Filter.css'


export default function Filter({filter, onChange }) {
  return (
    <label className="filter_wrap">
      Find contacts by name
      <input
        className="filter_input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}/>
    </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}