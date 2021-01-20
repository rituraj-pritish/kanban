import { GET_BOARDS } from 'graphql/queries/board'

export default [
	{
		request: {
			query: GET_BOARDS,
			variables: {
				user_id: '5fc385377875ba0ef6dc9713'
			}
		},
		result: {
			data: {
				getBoards: [
					{
						'_id': '5fce6961d60faf111fad44f3',
						'name': 'Board 1',
						'__typename': 'Board'
					},
					{
						'_id': '600870634187c107eeea02f2',
						'name': 'Board 2',
						'__typename': 'Board'
					}
				]
			}
		}
	}
]