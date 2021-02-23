import React from 'react'

export default function Input({ labelText, placeholderText }) {
  return (
    <label>
      {labelText}
      <input placeholder={placeholderText}></input>
    </label>
  )
}
