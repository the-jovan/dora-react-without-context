import styled from 'styled-components'

const StyledDataListWrapper = styled.div`
  display: ${props => props.toggle ? "block" : "none"};   
`

export {StyledDataListWrapper}