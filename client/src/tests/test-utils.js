import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import AuthState from 'contexts/auth/AuthState'

const Providers = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <Router>
            <AuthState>
                {children}
            </AuthState>
        </Router>
      </ThemeProvider>
    )
  }

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }