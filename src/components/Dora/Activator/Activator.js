import React from 'react'

import Search from './Search/Search'
import Display from './Display/ActivatorDisplay'
import Reset from './Reset/ActivatorReset'

import { StyledActivator } from './StyledActivator'

const Activator = ({showActivatorSearch, searchThroughData, defaultDisplayText, selectedElements, updateSelectedElements, toggleDataList, expanded, multiple}) => {
  return (
    <StyledActivator>
        {showActivatorSearch && (
          <Search
            searchParam={searchThroughData}
          />
        )}
        <Display
          defaultDisplayText={defaultDisplayText}
          selectedElements={selectedElements}
          updateSelectedElements={updateSelectedElements}
          toggleDataList={toggleDataList}
          multiple={multiple}
        />
        <Reset
          toggleDataList={toggleDataList}
          selectedElements={selectedElements}
          expanded={expanded}
          updateSelectedElements={updateSelectedElements}
          searchParam={searchThroughData}
        />
      </StyledActivator>
  )
}

export default Activator