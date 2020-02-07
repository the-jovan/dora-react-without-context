import styled from 'styled-components'

import arrDown from './../../media/arrDown.svg'
import arrUp from'./../../media/arrUp.svg'
import cross from './../../media/cross.svg'

const StyledActivatorReset = styled.div`
  background-image: url(${props => props.cross ? cross : (props.upDown ? arrUp : arrDown)});
  background-size: 50%, contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  margin: 8px;
  cursor: pointer;
  border-radius: 50%;

  :hover { 
    background-color: #e0fcff;
  }
`

export { StyledActivatorReset }