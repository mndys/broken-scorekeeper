import React, { useState } from 'react'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppGrid>
      <PlayerForm onAddPlayer={addPlayer} />
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={resetAll}>Reset all</Button>
    </AppGrid>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }
}

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
export default App
