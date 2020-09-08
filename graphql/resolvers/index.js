const card = require('./card')
const board = require('./board')
const list = require('./list')
const user = require('./user')

module.exports = {
	Query: {
		...card.Query,
		...board.Query,
		...user.Query
	},

	Mutation: {
		...card.Mutation,
		...board.Mutation,
		...list.Mutation,
		...user.Mutation
	}
}