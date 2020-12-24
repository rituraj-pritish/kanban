import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'
import getApolloClient from 'getApolloClient'

const client = getApolloClient()

const Providers = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<Router>
					<AuthState>
						{children}
					</AuthState>
				</Router>
			</ThemeProvider>
		</ApolloProvider>
	)
}

const customRender = (ui, options) =>
	render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }