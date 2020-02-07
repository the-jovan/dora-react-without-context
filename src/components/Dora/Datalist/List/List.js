import React from 'react'

import ListElement from './ListElement/ListElement'
import Loadmore from './Loadmore/Loadmore'

import {StyledDataList as DataListUl} from './StyledList'

const DataList = ({data, updateSelectedElements, multiple, selectedElements, updateRenderedElementsNumber, updateData, displayLoadmore}) => {

  const renderList = () => {
    return [...data].map((e,i) => {
    return <ListElement 
      key={i} elementData={e}
      multiple={multiple}
      selectedElements={selectedElements}
      updateSelectedElements={updateSelectedElements}
    />
  })
  }

  const renderLoadmore = () => {
    if (displayLoadmore) {
      return <Loadmore load={() => {
        updateRenderedElementsNumber()
        updateData()
      }} />
    }
  }

  return(
    <DataListUl>
      {renderList()}
      {renderLoadmore()}
    </DataListUl>
  )
}

export default DataList