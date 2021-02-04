import { GET_BOARD } from 'graphql/queries/board'

export default [
	{
		request: {
			query: GET_BOARD,
			variables: {
				id: '5fce6961d60faf111fad44f3' // Board 1
			}
		},
		result: {
			data: {
				getBoard: {
					_id: '5fce6961d60faf111fad44f3',
					name: 'Board 1',
					labels: [],
					lists: [{
						'_id': '5fce6963d60faf111fad44f7',
						'title': 'List 1',
						'board_id': '5fce6961d60faf111fad44f3',
						'cards': [
							{
								'_id': '5fce6f16d60faf111fad44fd',
								'title': 'Card 1',
								'labels': []
							},
							{
								'_id': '5fce6f17d60faf111fad44ff',
								'title': 'Card 2',
								'labels': []
							},
							{
								'_id': '5fce6f18d60faf111fad4501',
								'title': 'Card 3',
								'labels': []
							}]
					}]
				}
			}
		}
	}
]