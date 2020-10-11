import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  [key: string]: any
}

const ProtectedRoute: React.FC<Props> = props => {
	const token = window.localStorage.getItem('auth_token')

	if(!token) return <Redirect to='/' />

	return (
		<Route {...props} />
	)
}

export default ProtectedRoute
