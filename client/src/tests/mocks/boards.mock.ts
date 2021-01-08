import { graphql } from 'msw'

export default [
	graphql.query('getBoards', (req, res, ctx) => {
		return res(
			ctx.data({
				getBoards: [{
					_id: 1,
					name: 'Board 1'
				}]
			})
		)
	})
]