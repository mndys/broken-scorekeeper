import styled from 'styled-components/macro'

export default styled.button.attrs(props => ({
  className: props.className,
}))`
  padding: 5px;
  font-size: 16px;
  width: 100%;
`
