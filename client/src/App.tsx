import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import Dashboard from 'components/Dashboard'
import Board from 'components/Board'
import SignIn from 'components/SignIn'

const App: React.FC = () => {
	return (
		<div style={{ padding: '0 1rem', overflowY: 'hidden' }}>
			<ThemeProvider theme={theme}>
				<Router>
					<SignIn/>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/board/:boardId' component={Board} />
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	)
}

export default App
