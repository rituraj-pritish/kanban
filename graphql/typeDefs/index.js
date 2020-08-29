const { gql } = require('apollo-server-express')
const card = require('./card')
const board = require('./board')
const list = require('./list')

module.exports = gql`
  ${card.types}
  ${list.types}
  ${board.types}

  type Query {
    ${card.queries}
    ${board.queries}
  }

  type Mutation {
    ${card.mutations}
    ${list.mutations}
    ${board.mutations}
  }
`