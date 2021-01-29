import { CREATE_BOARD } from 'graphql/mutations/board'
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
						'name': 'Board 1'
					},
					{
						'_id': '600870634187c107eeea02f2',
						'name': 'Board 2'
					}
				]
			}
		}
	},


	// refetch boards
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
						'name': 'Board 1'
					},
					{
						'_id': '600870634187c107eeea02f2',
						'name': 'Board 2'
					},
					{
						'_id': '600870634187c107eeaa02f2',
						'name': 'Board 3'
					}
				]
			}
		}
	},

	{
		request: {
			query: CREATE_BOARD,
			variables: {
				name: 'Board 3',
				user_id: '5fc385377875ba0ef6dc9713',
				is_admin: true
			}
		},
		result: {
			data: {
				createBoard: true
			}
		}
	}
]