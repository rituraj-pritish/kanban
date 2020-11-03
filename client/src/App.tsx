import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useLazyQuery } from '@apollo/client'

import Navbar from 'components/Navbar'
import theme from 'theme'
import { GET_USER } from 'graphql/queries/user'
import Dashboard from 'components/Dashboard'
import Board from 'components/Board'
import AuthModal from 'components/AuthModal'
import Home from 'components/Home'
import ProtectedRoute from 'components/ProtectedRoute'
import AuthState from 'contexts/auth/AuthState'

const App: React.FC = () => {
	const [getUser, { data, loading, called }] = useLazyQuery(GET_USER)
	const token = window.localStorage.getItem('auth_token')

	if(called && !loading && !data) {
		window.localStorage.removeItem('auth_token')
	}

	useEffect(() => {
		if(token) getUser({ variables: {
			token
		} })
	}, [])

	return (
		<div style={{ overflowY: 'hidden' }}>
			<ThemeProvider theme={theme}>
				<Router>
					<AuthState>
						{!token && <AuthModal/>}
						<Navbar/>
						<Switch>
							<Route exact path='/' component={Home} />
							<ProtectedRoute exact path='/dashboard' component={Dashboard} />
							<ProtectedRoute exact path='/board/:boardId' component={Board} />
						</Switch>
					</AuthState>
				</Router>
			</ThemeProvider>
		</div>
	)
}

export default App
