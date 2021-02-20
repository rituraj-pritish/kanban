import { ApolloClient, InMemoryCache } from '@apollo/client'

export default () => {
	const token = window.localStorage.getItem('auth_token')

	const URI = process.env.NODE_ENV === 'production'
		? '/graphql'
		: 'http://localhost:5000/graphql'

	const defaultOptions = {
		mutate: {
			errorPolicy: 'all'
		},
		query: {
			errorPolicy: 'all'
		}
	}

	const client = new ApolloClient({
		uri: URI,
		headers: {
			authorization: token || ''
		},
		cache: new InMemoryCache(),
		defaultOptions
	})
  
	return client
}