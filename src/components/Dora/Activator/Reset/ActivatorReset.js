import React from 'react'

import { StyledActivatorReset as Reset } from './StyledActivatorReset'

const ActivatorReset = ({toggleDataList, updateSelectedElements, selectedElements, expanded}) => {
  return(
    <Reset 
      onClick={() => {
        toggleDataList()
        updateSelectedElements(new Set())
      }}
      cross={selectedElements.size > 0}
      upDown={expanded}
    />
  )
}

export default ActivatorReset