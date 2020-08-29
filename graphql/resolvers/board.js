const Board = require('../../models/Board')

module.exports = {
	Query: {
		getBoard: async (parent, { id }) => {
      
		},

		getBoards: async (parent, { user_id }) => {

		}
	},

	Mutations: {
		createBoard: async (parent, { name }) => {
			const board = await new Board({
				name
			}).save()

			return true
		}
	}
}