import React from 'react'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <label>
      {labelText}
      <input placeholder={placeholderText} name={name}></input>
    </label>
  )
}
