import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import getApolloClient from './getApolloClient'
import App from './App'
import './index.css'

const client = getApolloClient()

ReactDOM.render(
	<ApolloProvider client={client} >
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
