import styled from 'styled-components'

const StyledDataList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 320px;
  overflow: auto;

  ::-webkit-scrollbar {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 4%;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background-color: #005761;
  }
`

export { StyledDataList }