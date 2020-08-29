const Board = require('../../models/Board')

module.exports = {
	Query: {
		getBoard: async (parent, { id }) => {
      
		},

		getBoards: async (parent, { user_id }) => {
			const posts = await Board.find({ user_id })
			return posts
		}
	},

	Mutation: {
		createBoard: async (parent, { name, user_id }) => {
			console.log('req', name, user_id)
			const board = await new Board({
				user_id,
				name
			}).save()

			return true
		}
	}
}