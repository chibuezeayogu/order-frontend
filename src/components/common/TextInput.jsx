import React from 'react'

const TextInput = ({ value, onChange, text }) => {
  return (
    <input
      type="text"
      className="form-control rounded-left"
      value={value}
      onChange={onChange}
      id={text}
      placeholder={text}
    />
  )
}

export default TextInput
