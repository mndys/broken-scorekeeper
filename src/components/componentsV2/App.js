import styled from 'styled-components/macro'
import React, { useState } from 'react'
import GameForm from '../GameForm'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import Navigation from './Navigation'

function App() {
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
