import React from 'react'

import {default as Form} from './Form/DataListForm'
import {default as List} from './List/List'

import { StyledDataListWrapper as Wrapper} from './StyledDataList'

const DataList = ({
  expanded, 
  showForm, 
  onFormSubmit, 
  data, 
  multiple, 
  updateSelectedElements, 
  selectedElements, 
  displayLoadmore, 
  updateRenderedElementsNumber, 
  updateData
  }) => {
    
  return (
    <Wrapper toggle={expanded}>
      <Form
        showForm={showForm}
        onFormSubmit={onFormSubmit}
      />
      <List
        displayLoadmore={displayLoadmore}
        updateRenderedElementsNumber={updateRenderedElementsNumber}
        data={data}
        multiple={multiple}
        updateSelectedElements={updateSelectedElements}
        selectedElements={selectedElements}
        updateData={updateData}
      />
    </Wrapper>
  )
}

export default DataList