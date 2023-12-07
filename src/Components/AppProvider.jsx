import React from 'react'
import AppContext from '../Context/AppContext'

const AppProvider = ({children}) => {
    
  return (
    <AppContext>
        {children}
    </AppContext>
  )
}

export default AppProvider
