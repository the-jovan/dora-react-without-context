import React from 'react'

import {StyledDataListForm as Input} from './StyledDataListForm'

const DataListForm = ({showForm, onFormSubmit}) => {

  const renderInput = () => {
    if (showForm) {
      return <Input placeholder='Write something' />
    }
  }
  
  return(
    <form onSubmit={event => {
      event.preventDefault()
      if (document.querySelector(Input).value !== '') {
        onFormSubmit(document.querySelector(Input).value)
        document.querySelector(Input).placeholder = 'Write something'
      } else {
        document.querySelector(Input).placeholder = 'Cannot submit empty form'
      }
    }}>
      {renderInput()}
    </form>
  )
}

export default DataListForm