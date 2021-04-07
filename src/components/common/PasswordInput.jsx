import React from 'react'

const PasswordInput = ({ value, onChange }) => {
  return (
    <input
      type="password"
      className="form-control rounded-left"
      value={value}
      onChange={onChange}
      id="password"
      placeholder="Password"
    />
  )
}

export default PasswordInput
