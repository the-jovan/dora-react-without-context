import React from 'react'

const DataListContext = React.createContext({})

export const DataListProvider = DataListContext.Provider
export const DataListConsumer = DataListContext.Consumer
export default DataListContext