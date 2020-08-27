import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withInfo } from '@storybook/addon-info'

import theme from 'theme'
import '../src/index.css'

//TODO add global style

addDecorator(withInfo)
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      {story()}
    </>
  </ThemeProvider>
))
