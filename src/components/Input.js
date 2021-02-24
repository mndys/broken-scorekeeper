import styled from 'styled-components/macro'
import React from 'react'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <InputStyled>
      {labelText}
      <input placeholder={placeholderText} name={name}></input>
    </InputStyled>
  )
}

const InputStyled = styled.label`
  input {
    width: 100%;
  }
`
