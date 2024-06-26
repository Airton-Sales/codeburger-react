import propTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}

UserProvider.propTypes = {
  children: propTypes.node
}
