import { createContext, useContext, useState } from "react";
import type { LoginForm, RegisterForm } from "../utils/interfaces";
import api from "../services/api";
import { Toast } from '../utils/toast';

interface AuthProps {
  logged: boolean,
  loading: boolean,
  signIn(event: React.FormEvent<HTMLFormElement>, formState: LoginForm): void
  signUp(event: React.FormEvent<HTMLFormElement>, formState: RegisterForm): void
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

    setLoading(true)

    await api.post('/login', formState)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token)

        setLogged(true)
        setLoading(false)

        Toast.fire({
            icon: 'success',
            title: response.data.message
        });
      })
      .catch(error => {
        console.log(error)
        Toast.fire({
            icon: 'error',
            title: error.response.data.error
        });

        setLoading(false)
      })
  }

  const signUp = async (event: React.FormEvent<HTMLFormElement>, formState: RegisterForm) => {
    event.preventDefault();

    setLoading(true)

    await api.post('/register', formState)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token)

        setLogged(true)
        setLoading(false)

        Toast.fire({
            icon: 'success',
            title: response.data.message
        });
      })
      .catch(error => {
        console.log(error)
        Toast.fire({
            icon: 'error',
            title: error.response.data.error
        });

        setLoading(false)
      })
  }

  return (
    <AuthContext.Provider value={{
      logged,
      loading,
      signIn,
      signUp
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
