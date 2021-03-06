import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const URI = process.env.NODE_ENV === 'production'
	? '/graphql'
	: 'http://localhost:5000/graphql'

const httpLink = createHttpLink({
	uri: URI,
})

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('auth_token')

	return {
		headers: {
			...headers,
			authorization: token ? token : '',
		}
	}
})

const defaultOptions = {
	mutate: {
		errorPolicy: 'all'
	},
	query: {
		errorPolicy: 'all'
	}
}

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
	defaultOptions
})
	
export default () => {
	return client
}