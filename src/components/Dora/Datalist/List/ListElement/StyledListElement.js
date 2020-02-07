import styled from 'styled-components'

const StyledDataListElement = styled.li`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.2rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  padding: 8px 0 8px 16px;
  cursor: pointer;
  color: ${props => (props.selected ? "#e0fcff" : "#005761")};
  background-color: ${props => (props.selected ? "#005761" : "transparent")};

  :hover { 
    background-color: #005761; 
    color: #e0fcff;
  }
  :focus { 
    border-top: 3px solid #d6fbff;
    border-bottom: 3px solid #d6fbff;
  }
`

export { StyledDataListElement }