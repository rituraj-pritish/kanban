import { GET_USER } from 'graphql/queries/user'

export default [
	{
		request: {
			query: GET_USER,
			variables: {
				token: 'token'
			}
		},
		result: {
			data: {
				getUser: {
					email: 'jd@gmail.com',
					first_name: 'John',
					last_name: 'Doe',
					is_verified: false,
					__typename: 'User',
					_id: '5fc385377875ba0ef6dc9713'
				}
			}
		}
	}
]