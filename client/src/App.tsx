import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'
import Routes from 'components/Routes/Routes'

const App: React.FC = () => {
	return (
		<div style={{ overflow: 'hidden', background: '#f7f8ff' }}>
			<ThemeProvider theme={theme}>
				<Router>
					<AuthState>
						<Routes/>
					</AuthState>
				</Router>
			</ThemeProvider>
		</div>
	)
}

export default App
