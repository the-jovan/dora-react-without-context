import React from 'react'
import DisplaySelectedElement from './DisplaySelectedElement/DisplaySelectedElement'

import { StyledActivatorDisplay as Display } from './StyledActivatorDisplay'

const ActivatorDisplay = ({selectedElements, updateSelectedElements, defaultDisplayText, multiple, toggleDataList}) => {
  const createDisplay = () => {
    if (selectedElements.size > 0) {
      return [...selectedElements].map((e,i) => (
        <DisplaySelectedElement
          key={i}
          display={e}
          click={updateSelectedElements}
          selectedElements={selectedElements}
          multiple={multiple}
        />
      ))
    } else return defaultDisplayText
  }

  return(
    <Display onClick={event => event.target === document.querySelector(Display) && toggleDataList()}>
      {createDisplay()}
    </Display>
  )
}

export default ActivatorDisplay