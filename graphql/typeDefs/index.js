const { gql } = require('apollo-server-express')
const card = require('./card')
const board = require('./board')
const list = require('./list')

module.exports = gql`
  ${card.types}
  ${board.types}
  ${list.types}

  type Query {
    ${card.queries}
    ${board.queries}
  }

  type Mutation {
    ${card.mutations}
    ${board.mutations}
    ${list.mutations}
  }
`