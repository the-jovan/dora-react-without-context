import React from 'react'

const DoraContext = React.createContext({})

export const DoraProvider = DoraContext.Provider
export const DoraConsumer = DoraContext.Consumer
export default DoraContext