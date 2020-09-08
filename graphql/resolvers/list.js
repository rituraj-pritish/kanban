const List = require('../../models/List')
const Board = require('../../models/Board')

module.exports = {
	Query: {

	},

	Mutation: {
		createList: async (_, { title, board_id }) => {
			const list = await new List({
				board_id,
				title
			}).save()

			const board = await Board.findById(board_id)
			board.lists.push(list._id)
			board.save()

			return true
		},

		updateListIndex: async (
			_,
			{ new_index, old_index, list_id, board_id }
		) => {
			const board = await Board.findById(board_id)

			board.lists.splice(old_index, 1)
			board.lists.splice(new_index, 0, list_id)

			board.save()
		}
	}
}