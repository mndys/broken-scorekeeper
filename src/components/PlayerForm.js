import React from 'react'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input type="text" placeholder="player name" name="player"></input>
      </label>
    </form>
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
