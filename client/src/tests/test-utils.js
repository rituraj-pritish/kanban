import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MockedProvider } from '@apollo/client/testing'

import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'
import mocks from './mocks'

import './localStorage'

const Providers = ({ children }) => {
	return (
		<MockedProvider mocks={mocks}>
			<ThemeProvider theme={theme}>
				<Router>
					<AuthState>
						{children}
					</AuthState>
				</Router>
			</ThemeProvider>
		</MockedProvider>
	)
}

const customRender = (ui, options) =>
	render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }