import React, { useEffect, useReducer } from 'react'
import { useApolloClient, useLazyQuery } from '@apollo/client'

import { AUTH_ERROR, AUTH_SUCCESS, SIGNOUT } from 'contexts/types'
import authReducer from './authReducer'
import AuthContext from './AuthContext'
import { GET_USER } from 'graphql/queries/user'
import { useHistory } from 'react-router-dom'

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: true,
}

const AuthState: React.FC = ({ children }) => {
	const client = useApolloClient()
	const history = useHistory()
	const [getUser, { data, called, loading }] = useLazyQuery(GET_USER)
  
	const token = window.localStorage.getItem('auth_token')

	useEffect(() => {
		if(token && !loading && !called) { 
			getUser({ variables: { token } })
		}
	}, [token])

	const [state, dispatch] = useReducer(authReducer, initialState)
  
	if(!token && state.loading) {
		dispatch({
			type: AUTH_ERROR,
			payload: null
		})
	}

	if(called && !loading && data?.getUser && state.loading) {
		dispatch({
			type: AUTH_SUCCESS,
			payload: data.getUser
		})
	}

	const signOut = () => {
		client.resetStore()
		localStorage.removeItem('auth_token')
		dispatch({
			type: SIGNOUT,
			payload: null
		})
		history.push('/')
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loading: state.loading,
				signOut,
				dispatch
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthState