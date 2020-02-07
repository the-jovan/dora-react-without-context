import React from 'react'

//components
import Dora from './Dora/Dora'

// const activatorClick = () => console.log('activator clicked')
const dataFormSubmit = (resp) => alert(resp)
const fixData = arr => {
  const transf = arr.map(({title, body}) => ({display: title, value: body}))
  return transf
}

const OPTIONS = {
  multiple: true,
  // title: 'Select something',
  showActivatorSearch: true,
  // dataURL: 'https://jsonplaceholder.typicode.com/posts',
  data: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
  // data: [
  //   {display: 'Option1 Option1 Option1 Option1 Option1', value: 'Value1'}, 
  //   {display: 'Opcija2 Opcija2 Opcija2 Opcija2 Opcija2', value: 'Value2'},
  //   {display: 'Option3 Option3 Option3 Option3 Option3', value: 'Value3'},
  //   {display: 'Opcija4 Opcija4 Opcija4 Opcija4 Opcija4', value: 'Value4'},
  //   {display: 'Option5 Option5 Option5 Option5 Option5 Option5 Option5 Option5 Option5', value: 'Value5'},
  //   {display: 'Opcija6', value: 'Value6'},
  //   {display: 'Option7', value: 'Value7'}, 
  //   {display: 'Opcija8', value: 'Value8'},
  //   {display: 'Option9', value: 'Value9'}, 
  //   {display: 'Opcija10', value: 'Value10'},
  //   {display: 'Option11', value: 'Value11'},
  //   {display: 'Opcija12', value: 'Value12'},
  //   {display: 'Option13', value: 'Value13'},
  //   {display: 'Opcija14', value: 'Value14'},
  //   {display: 'Option15', value: 'Value15'}, 
  //   {display: 'Opcija16', value: 'Value16'}
  // ],
  dataListInput: true,
  limit: 5,
  // onActivatorClick: activatorClick,
  onDataFormSubmit: dataFormSubmit,
  fixData: fixData
}

const App = () => {
  return (
    <div>
      <Dora {...OPTIONS} />
    </div>
  )
}

export default App