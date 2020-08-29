const card = require('./card')

module.exports = {
  Query: {
    ...card.Query,
  },

  Mutation: {
    ...card.Mutation
  }
}