import React, {Component} from 'react'

import getData from './../../services/getData'
import PropTypes from 'prop-types'

import Activator from './Activator/Activator'
import DataList from './Datalist/DataList'

import {StyledDora} from './StyledDora'


class Dora extends Component {
  static defaultProps = {
    title: 'Select something',
    multiple: false,
    showActivatorSearch: false,
    data: [],
    dataListInput: false,
    limit: 5
  }
  state = {
    data: [],
    filteredData: [],
    selectedElements: new Set(),
    expanded: false,
    searchParam: '',
    renderedElementsNumber: this.props.limit,
    displayLoadmore: true
  }

  componentDidMount() {
    const {data, dataURL, limit} = this.props
    if (dataURL) {
      getData({url: dataURL, start: 0, limit})
      .then(data => this.setState({data}))
    } else {
      this.setState({data})
    }
  }

  updateData = () => {
    this.props.dataURL && (
      getData({url: this.props.dataURL, start: this.state.data.length, limit: this.props.limit})
      .then(
        response => {
          return this.setState(state => {
            return {
              data: [...state.data, ...response],
              displayLoadmore: response.length >= this.props.limit
            }
          })
        }
      )
    )
  }

  searchThroughData = param => {
    if (param !== '') {
      let newData = this.state.data.filter(e => {
        return typeof e === 'object' ? e.display.includes(param) : e.includes(param)
      })
      this.setState({
        searchParam: param,
        filteredData: newData
      })
    } else {
        this.setState({
          filteredData: []
        })
    }
  }

  toggleDataList = () => {
    this.setState(state => {
      return {
        expanded: !state.expanded
      }
    })
  }

  updateSelectedElements = selectedElements => {
    this.setState({selectedElements})
  }

  updateRenderedElementsNumber = () => {
    this.setState(state => {
      return {
        renderedElementsNumber: state.renderedElementsNumber += this.props.limit,
        displayLoadmore: state.renderedElementsNumber >= state.data.length ? false : true
      }
    })
  }

  render() {
    const {title, showActivatorSearch, dataListInput, onDataFormSubmit, multiple} = this.props
    const {selectedElements, expanded, data, filteredData, renderedElementsNumber, displayLoadmore} = this.state
    const dataToBeRendered = filteredData.length > 0 ? filteredData : data.slice(0, renderedElementsNumber)
    return (
      <StyledDora>
        <Activator
          defaultDisplayText={title}
          showActivatorSearch={showActivatorSearch}
          toggleDataList={this.toggleDataList}
          searchThroughData={this.searchThroughData}
          /*-------------------*/
          expanded={expanded}
          selectedElements={selectedElements}
          multiple={multiple}
          updateSelectedElements={this.updateSelectedElements}          
        />
        <DataList
          data={dataToBeRendered}
          displayLoadmore={displayLoadmore}
          showForm={dataListInput}
          onFormSubmit={onDataFormSubmit}
          expanded={expanded}
          selectedElements={selectedElements}
          multiple={multiple}
          updateRenderedElementsNumber={this.updateRenderedElementsNumber}
          updateSelectedElements={this.updateSelectedElements}
          updateData={this.updateData}
        />
      </StyledDora>
    )
  }
}

Dora.propTypes = {
  title: PropTypes.string,
  multiple: PropTypes.bool,
  showActivatorSearch: PropTypes.bool,
  dataListInput: PropTypes.bool,
  limit: PropTypes.number,
  data: PropTypes.array,
  dataURL: PropTypes.string
}

export default Dora