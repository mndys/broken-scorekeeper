import React from 'react'
import './PlayerForm.css'

export default function PlayerForm({ onPlayerAdd }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onPlayerAdd(name)
    form.reset()
    input.focus()
  }

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <input type="text" placeholder="player name" name="player"></input>
      </label>
    </form>
  )
}
