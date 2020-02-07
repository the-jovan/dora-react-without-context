import styled from 'styled-components'

const StyledActivatorDisplay = styled.div`
padding: 8px 8px 8px 0;
flex: 1;
cursor: pointer;
height: 30px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
display: flex;

:hover {
  height: auto;
  white-space: normal;
  display: block;
}
`

export { StyledActivatorDisplay }