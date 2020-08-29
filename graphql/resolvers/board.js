const Board = require('../../models/Board')

module.exports = {
	Query: {
		getBoard: async (parent, { id }) => {
			const board = await Board.findById(id)
				.populate({
					path: 'lists',
					populate: { path: 'cards' }
				})

			return board
		},

		getBoards: async (parent, { user_id }) => {
			const boards = await Board.find({ user_id })
			return boards
		}
	},

	Mutation: {
		createBoard: async (parent, { name, user_id }) => {
			const board = await new Board({
				user_id,
				name
			}).save()

			return true
		}
	}
}