import React, { useEffect, useReducer } from 'react'
import { useApolloClient, useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'

import { AUTH_ERROR, AUTH_SUCCESS, SIGNOUT } from 'contexts/types'
import authReducer from './authReducer'
import AuthContext from './AuthContext'
import { GET_USER } from 'graphql/queries/user'

const initialState = {
	isAuthenticated: false,
	user: null,
	loading: true,
}

const AuthState: React.FC = ({ children }) => {
	const client = useApolloClient()
	const history = useHistory()
	const [getUser, { data, called, loading, error }] = useLazyQuery(GET_USER)
  
	const token = window.localStorage.getItem('auth_token')
	useEffect(() => {
		if(token && !loading && !called && !error) { 
			console.log('called')
			getUser({ variables: { token } })
		}
	}, [token])

	const [state, dispatch] = useReducer(authReducer, initialState)
  
	if(!token && state.loading || error) {
		localStorage.removeItem('auth_token')
		dispatch({
			type: AUTH_ERROR,
			payload: null
		})
		history.push('/')
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

	if(state.loading) return <div>loading...</div>

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