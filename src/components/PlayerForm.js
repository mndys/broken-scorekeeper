import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input type="text" placeholder="player name" name="player"></input>
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  input {
    border: 2px solid #bbb;
    width: 100%;
  }
`
