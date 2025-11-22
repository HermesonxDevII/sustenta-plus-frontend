import { createContext, useContext, useState } from "react";
import type { LoginForm } from "../utils/interfaces";

interface AuthProps {
  logged: boolean,
  loading: boolean,
  signIn(event: React.FormEvent<HTMLFormElement>, formState: LoginForm): void
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('logged')
    return !!isLogged
  })

  const [loading, setLoading] = useState<boolean>(false)

  const signIn = async (event: React.FormEvent<HTMLFormElement>, formState: LoginForm) => {
    event.preventDefault();

    try {
      setLoading(true)
      const { email, password } = formState

      console.log(email, password)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      logged,
      loading,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthProps {
  const context = useContext(AuthContext)
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

export { AuthProvider, useAuth }
