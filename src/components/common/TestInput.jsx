import React from 'react'

const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="form-control rounded-left"
      value={value}
      onChange={onChange}
      id="email"
      placeholder="Email"
    />
  )
}

export default TextInput
