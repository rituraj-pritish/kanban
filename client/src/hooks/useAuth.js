import { useApolloClient } from '@apollo/client'
import { GET_USER } from 'graphql/queries/user'

export default () => {
	const client = useApolloClient()
	const token = localStorage.getItem('auth_token')

	const data = client.readQuery({ 
		query: GET_USER, 
		variables: {
			token
		}
	})

	return {
		isAuthenticated: token && data?.getUser ? true : false,
		user: data?.getUser
	}
}


/*
  on signup / signin write to cache using writeQuery\
  for getUser query
*/