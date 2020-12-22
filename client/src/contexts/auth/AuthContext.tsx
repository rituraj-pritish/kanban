import { createContext, Dispatch } from 'react'
import { User } from 'types/auth'

interface Context {
  isAuthenticated: boolean,
  loading: boolean,
  user: User | null,
  dispatch: Dispatch<{type: string, payload: unknown}>,
  signOut: () => void
}

const AuthContext = createContext<Context>({
	dispatch: () => ({ type: '', payload: '' }),
	isAuthenticated: false,
	loading: true,
	user: null,
	signOut: () => {}
})

export default AuthContext