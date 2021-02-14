import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'
import Routes from 'components/app/Routes/Routes'
import checkAuthToken from 'helpers/checkAuthToken'

const App: React.FC = () => {
	useEffect(() => {
		checkAuthToken()
	}, [])
	
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
