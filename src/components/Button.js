import React from 'react'
import './Button.css'

export default function Button({ text, onClick, className = 'Button' }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}
