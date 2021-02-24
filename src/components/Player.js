import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <SectionPlayer score={score}>
      {name}
      <div>
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
      </div>
    </SectionPlayer>
  )
}

const SectionPlayer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    span {
      color: hsl(${props => props.score * 10}, 50%, 50%);
    }
  }
`
