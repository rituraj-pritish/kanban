import AuthContext from 'contexts/auth/AuthContext'
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  [key: string]: any
}

const ProtectedRoute: React.FC<Props> = props => {
	const { isAuthenticated, loading } = useContext(AuthContext)
	
	if(!isAuthenticated && !loading) return <Redirect to='/' />

	return (
		<Route {...props} />
	)
}

export default ProtectedRoute
