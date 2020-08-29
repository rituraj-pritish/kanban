const Card = require('../../models/Card')

module.exports = {
	Query: {
		getCard: async (parent, { id }) => {

		}
	},

	Mutation: {
		createCard: async (parent, { title }) => {
			const card = await new Card({
				title
			}).save()

			return true
		}
	}
}