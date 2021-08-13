import React from 'react'

const initialState = {
  username: null,
  token: null,
}
const AppContext = React.createContext(initialState)

const appReducer = (context, action) => {
  switch (action.type) {
    case 'setUsername':
      return { ...context, username: action.payload }
    case 'setToken':
      return { ...context, token: action.payload }
    default:
      console.error(`Type "${action.type}" is not reducer action in AppReducer`)
      return context
  }
}



const AppContextProvider = ({ children }) => {
  const [context, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <AppContext.Provider value={[context, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }