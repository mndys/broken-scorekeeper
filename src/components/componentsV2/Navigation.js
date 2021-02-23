import React from 'react'
import Button from '../Button'
import './Navigation.css'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <nav className="Navigation">
      <Button
        className={activeIndex === 'Play' && 'Navigation__Button--active'}
        text="Play"
        onClick={handleClick}
      />
      <Button
        className={activeIndex === 'History' && 'Navigation__Button--active'}
        text="History"
        onClick={handleClick}
      />
    </nav>
  )

  function handleClick(event) {
    const clickedButton = event.target.innerHTML
    console.log(clickedButton)
    event.preventDefault()
    onNavigate(clickedButton)
  }
}
