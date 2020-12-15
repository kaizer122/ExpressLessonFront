import React, { createContext, useState } from "react"

export const UserContext = createContext()

const storage = localStorage.getItem("user")
  ? {
      isLoggedIn: true,
      user: JSON.parse(localStorage.getItem("user")),
      token: JSON.parse(localStorage.getItem("token")),
    }
  : { isLoggedIn: false, user: null, token: null }

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(storage)

  const login = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload.data ?? null))
    localStorage.setItem("token", JSON.stringify(payload.token ?? null))
    setState({
      isLoggedIn: true,
      user: payload.data,
      token: payload.token,
    })
  }

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setState({
      isLoggedIn: false,
      user: null,
      token: null,
    })
  }

  const contextValues = {
    login,
    logout,
    ...state,
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
