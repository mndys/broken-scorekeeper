import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav className="Navigation">
      <Button
        className={currentPage === 'Play' && 'Navigation__Button--active'}
        onClick={handleClick}
      >
        Play
      </Button>
      <Button
        className={currentPage === 'History' && 'Navigation__Button--active'}
        onClick={handleClick}
      >
        History
      </Button>
    </Nav>
  )

  function handleClick(event) {
    const clickedButton = event.target.innerHTML
    console.log(clickedButton)
    event.preventDefault()
    onNavigate(clickedButton)
  }
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  .Navigation__Button--active {
    background: #fb1;
  }
`
