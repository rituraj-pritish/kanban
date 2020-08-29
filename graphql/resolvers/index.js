const card = require('./card')
const board = require('./board')
const list = require('./list')

module.exports = {
	Query: {
		...card.Query,
		...board.Query
	},

	Mutation: {
		...card.Mutation,
		...board.Mutation,
		...list.Mutation
	}
}