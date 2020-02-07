import styled from 'styled-components'

const StyledDisplaySelectedElement = styled.span`
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  flex: 1;
  max-height: 50px;
  margin-right: 4px;
  padding-bottom: 2px;
  line-height: 90%;
  
  :hover {
    text-decoration: underline;
  }
`

export { StyledDisplaySelectedElement }