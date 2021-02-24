import Button from './Button'
import GameForm from './GameForm'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'
import Player from './Player'
import PlayerForm from './PlayerForm'
import React, { useState } from 'react'
import styled from 'styled-components/macro'

function App() {
  const [players, setPlayers] = useState([])
  const [games, setGames] = useState([
    {
      nameOfGame: 'Carcassonne',
      playerNames: [
        { name: 'Jerry', score: 100 },
        { name: 'Jakob', score: 500 },
      ],
    },
    {
      nameOfGame: `Wizard's Chess`,
      playerNames: [
        { name: 'Lene', score: 100 },
        { name: 'Ron', score: 5 },
      ],
    },
  ])
  const [page, setPage] = useState('Play')

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
      <Header>{games[1].nameOfGame}</Header>
      <GameForm onCreateGame={createGame} />
      <Navigation onNavigate={navigate} activeIndex={page} />
      {games.map(game => {
        return (
          <HistoryEntry
            nameOfGame={game.nameOfGame}
            players={game.playerNames}
          />
        )
      })}
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

  function createGame(inputGame, inputPlayers) {
    setGames([
      ...games,
      {
        nameOfGame: inputGame,
        playerNames: inputPlayers
          .split(',')
          .map(player => ({ name: player.trim(), score: 0 })),
      },
    ])
  }

  function navigate(activeIndex) {
    setPage(activeIndex)
  }
}

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
export default App
