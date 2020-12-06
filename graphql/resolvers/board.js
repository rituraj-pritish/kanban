const Board = require('../../models/Board')
const List = require('../../models/List')
const Card = require('../../models/Card')

module.exports = {
	Query: {
		getBoard: async (_, { id }) => {
			console.log('id', id)
			const board = await Board.findById(id)
				.populate({
					path: 'lists',
					populate: { path: 'cards' }
				})

			return board
		},

		getBoards: async (_, { user_id }) => {
			const boards = await Board.find({ 'users.user': user_id })
			return boards
		}
	},

	Mutation: {
		createBoard: async (_, { name, user_id, is_admin = false }) => {
			await new Board({
				name,
				users: {
					user: user_id,
					is_admin
				}
			}).save()

			return true
		},

		deleteBoard: async (_, { id }) => {
			const board = await Board.findById(id)
			board.lists.forEach( async listId => {
				const list = await List.findById(listId)

				list.cards.forEach( async cardId => await Card.findByIdAndDelete(cardId))
				await list.deleteOne()
			})

			await board.deleteOne()
			return true
		}
	}
}