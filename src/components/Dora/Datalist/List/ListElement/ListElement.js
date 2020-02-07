import React from 'react'

import { StyledDataListElement as Element} from './StyledListElement'

const ListElement = ({elementData, selectedElements, multiple, updateSelectedElements}) => {

  const createDisplay = () => {
    if (elementData.display) {
      return elementData.display
    } else {
      return elementData
    }
  }
  
  const addValue = () => {
    if (elementData.value) {
      return elementData.value
    } else {
      return elementData
    }
  }

  const selectElement = (value) => {
    let updatedSelectedElements = new Set(selectedElements)
    if (selectedElements.has(value)) {
      updatedSelectedElements.delete(value)
    } else {
      if (multiple) {
        updatedSelectedElements.add(value)
      } else {
        updatedSelectedElements.clear()
        updatedSelectedElements.add(value)
      }
    }
    return updatedSelectedElements
  }

  return(
    <Element
      tabIndex="0"
      data-value={addValue()}
      onClick={() => updateSelectedElements(selectElement(createDisplay()))}
      selected={selectedElements.has(createDisplay())}
    >
      {createDisplay()}
    </Element>
  )
}

export default ListElement