import styled from 'styled-components'

import search from './../../media/search.png'
import serachHover from './../../media/searchHover.svg'

const StyledActivatorSearch = styled.div``

const StyledActivatorSearchIcon = styled.div`
  cursor: pointer;
  margin: 8px;
  padding: 20px;
  background-size: 50%, contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${search});
  border-radius: 50%;

  :hover { 
    background-color: #e0fcff;
    background-image: url(${serachHover})
  }
`
const StyledActivatorSearchInput = styled.input`
  position: absolute;
  padding: 4px;
  color: #005761;
  text-indent: 4px;
  font-size: 1rem;
`

export { 
  StyledActivatorSearch,
  StyledActivatorSearchIcon,
  StyledActivatorSearchInput
}