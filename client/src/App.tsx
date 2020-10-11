import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import Dashboard from 'components/Dashboard'
import Board from 'components/Board'
import AuthModal from 'components/AuthModal'

const App: React.FC = () => {
	return (
		<div style={{ padding: '0 1rem', overflowY: 'hidden' }}>
			<ThemeProvider theme={theme}>
				<Router>
					<AuthModal/>
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
