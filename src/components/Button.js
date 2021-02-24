import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? '#fb1' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  border: 1px solid black;
  width: 100%;
`
