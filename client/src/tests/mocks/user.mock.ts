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
					avatar_bg_color: '#a4e4eb',
					email: 'jd@gmail.com',
					first_name: 'John',
					last_name: 'Doe',
					__typename: 'User',
					_id: '5fc385377875ba0ef6dc9713'
				}
			}
		}
	}
]