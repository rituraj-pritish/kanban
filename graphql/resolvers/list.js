const List = require('../../models/List')

module.exports = {
	Query: {

	},

	Mutation: {
		createList: async (parent, { title, board_id }) => {
			const list = await new List({
				board_id,
				title
			}).save()

			return true
		}
	}
}