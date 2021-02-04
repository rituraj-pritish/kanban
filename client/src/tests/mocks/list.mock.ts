import { CREATE_LIST } from 'graphql/mutations/list'

export default [
	{
		request: {
			query: CREATE_LIST,
			variables: { 
				title:'List 2',
				board_id:'5fce6961d60faf111fad44f3' 
			}
		},
		result:{
			data: {
				createList: true
			}
		}
	}
]