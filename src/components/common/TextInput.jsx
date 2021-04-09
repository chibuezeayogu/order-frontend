import React from 'react'

const TextInput = ({ value, onChange, text }) => {
  return (
    <input
      type="text"
      className="form-control rounded-left"
      value={value}
      onChange={onChange}
      id="email"
      placeholder={text}
    />
  )
}

export default TextInput
