import React from 'react'
import Button from '../Button'
import Input from './Input'

export default function GameForm({ onCreateGame }) {
  return (
    <form onSubmit={handleSubmit}>
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
      <Button text="Create Game" />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const inputFieldGame = form[0]
    const inputFieldPlayers = form[1]
    const inputGame = inputFieldGame.value
    const inputPlayers = inputFieldPlayers.value
    onCreateGame(inputGame, inputPlayers)
    form.reset()
    inputFieldGame.focus()
  }
}
