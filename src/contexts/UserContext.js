import React, { createContext, useReducer } from "react";
import { CartReducer as UserReducer, sumItems } from "./CartReducer";

export const UserContext = createContext();

const storage = localStorage.getItem("user")
  ? { isLoggedIn: true, user: JSON.parse(localStorage.getItem("user")) }
  : { isLoggedIn: false, user: null };

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, storage);

  const login = (payload) => {
    dispatch({ type: "LOGIN", payload });
  };

  const logout = (payload) => {
    dispatch({ type: "LOGOUT", payload });
  };

  const contextValues = {
    login,
    logout,
    ...state,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
