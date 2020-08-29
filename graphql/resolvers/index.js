const card = require('./card')
const board = require('./board')

module.exports = {
	Query: {
		...card.Query,
		...board.Query
	},

	Mutation: {
		...card.Mutation,
		...board.Mutation
	}
}