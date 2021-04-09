import React from 'react'

const DateInput = ({ value, onChange, text }) => {
  return (
    <input
      type="date"
      className="form-control rounded-left"
      value={value}
      onChange={onChange}
      id={text}
      placeholder={text}
      required
    />
  )
}

export default DateInput
