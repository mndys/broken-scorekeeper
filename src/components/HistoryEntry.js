import styled from 'styled-components/macro'
import React from 'react'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Entry>
      <h2>{nameOfGame}</h2>
      {players.map(player => (
        <div className="HistoryEntry__player">
          <div>{player.name}</div>
          <div>{player.score}</div>
        </div>
      ))}
    </Entry>
  )
}

const Entry = styled.section`
  div {
    display: flex;
    justify-content: space-between;
  }
`
