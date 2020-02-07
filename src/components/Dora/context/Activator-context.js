import React from 'react'

const ActivatorContext = React.createContext({})

export const ActivatorProvider = ActivatorContext.Provider
export const ActivatorConsumer = ActivatorContext.Consumer
export default ActivatorContext