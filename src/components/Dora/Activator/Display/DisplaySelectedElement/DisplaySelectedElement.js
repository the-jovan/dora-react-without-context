import React from 'react'

import { StyledDisplaySelectedElement as Element } from './StyledDisplaySelectedElement'

const DisplaySelectedElement = ({selectedElements, display, multiple, click}) => {
  const updatedElements = () => {
    let updatedSelectedElements = new Set(selectedElements)
    if (updatedSelectedElements.has(display) && multiple) {
      updatedSelectedElements.delete(display)
    }
    return updatedSelectedElements
  }

  return (
    <Element onClick={() => click(updatedElements())}>{display} </Element>
  )
}

export default DisplaySelectedElement