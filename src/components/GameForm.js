import styled from 'styled-components/macro'
import React from 'react'
import Button from './Button'
import Input from './Input'

export default function GameForm({ onCreateGame }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        labelText="Name of Game: "
        placeholderText="e.g. Carcassonne"
        name="game"
      />
      <Input
        labelText="Player Names: "
        placeholderText="e.g. JohnDoe, Jane Doe, ..."
        name="players"
      />
      <Button>Create Game</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const inputFieldGame = form.elements.game
    const inputFieldPlayers = form.elements.players
    const inputGame = inputFieldGame.value
    const inputPlayers = inputFieldPlayers.value
    onCreateGame(inputGame, inputPlayers)
    form.reset()
    inputFieldGame.focus()
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`