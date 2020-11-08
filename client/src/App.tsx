import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'
import Routes from 'components/Routes/Routes'

const App: React.FC = () => {
	return (
		<div style={{ overflowY: 'hidden' }}>
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
