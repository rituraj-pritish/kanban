import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import Dashboard from 'components/Dashboard'
import Board from 'components/Board'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/board/:boardId' component={Board} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
