import React from 'react'
import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <h2>{nameOfGame}</h2>
      {players.map(player => (
        <div className="HistoryEntry__player">
          <div>{player.name}</div>
          <div>{player.score}</div>
        </div>
      ))}
    </section>
  )
}
