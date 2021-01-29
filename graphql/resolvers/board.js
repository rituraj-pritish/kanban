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

		updateBoard: async (_, { name, id }) => {
			await Board.findById(id)
				.update({
					name
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
		},

		// labels
		createLabel: async (_, { board_id, name, bg_color }) => {
			const board = await Board.findById(board_id)
			board.labels.push({
				name,
				bg_color
			})
			await board.save()
			return true
		},

		updateLabel: async (_, { board_id, label_id , name, bg_color }) => {
			const board = await Board.findById(board_id)
			const label_index = board.labels.findIndex(({ _id }) => 
				_id.toString() === label_id.toString())
			
			board.labels[label_index] = {
				...board.labels[label_index]._doc,
				name,
				bg_color
			}
			
			await board.save()
			return true
		},

		deleteLabel: async (_, { board_id, label_id }) => {
			const board = await Board.findById(board_id)
			const labels = board.labels
			board.labels = labels.filter(({ _id }) => _id.toString() !== label_id.toString())
			await board.save()
			return true
		}
	}
}