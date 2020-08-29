const { gql } = require('apollo-server-express')
const card = require('./card')
const board = require('./board')

module.exports = gql`
  ${card.types}
  ${board.types}

  type Query {
    ${card.queries}
    ${board.queries}
  }

  type Mutation {
    ${card.mutations}
    ${board.mutations}
  }
`