import { createContext, Dispatch } from 'react'
import { User } from 'types/auth'

interface Context {
  isAuthenticated: boolean,
  loading: boolean,
  user: User | null,
  dispatch: Dispatch<{type: string, payload: any}>,
  signOut: () => void
}

// @ts-expect-error
const AuthContext = createContext<Context>()

export default AuthContext