const List = require('../../models/List')
const Board = require('../../models/Board')

module.exports = {
	Query: {

	},

	Mutation: {
		createList: async (parent, { title, board_id }) => {
			const list = await new List({
				board_id,
				title
			}).save()

			const board = await Board.findById(board_id)
			board.lists.push(list._id)
			board.save()

			return true
		}
	}
}