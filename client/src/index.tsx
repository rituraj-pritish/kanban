import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App'
import './index.css'

const token = window.localStorage.getItem('auth_token')

const URI = process.env.NODE_ENV === 'production'
	? '/graphql'
	: 'http://localhost:5000/graphql'

const client = new ApolloClient({
	uri: URI,
	headers: {
		authorization: token || ''
	},
	cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client} >
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
