import { createContext, useContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
  return (
    <AuthContext.Provider value={{

    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { 
  AuthProvider,
};