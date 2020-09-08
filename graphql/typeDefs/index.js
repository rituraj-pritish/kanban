const { gql } = require('apollo-server-express')

const card = require('./card')
const board = require('./board')
const list = require('./list')
const user = require('./user')

module.exports = gql`
  ${card.types}
  ${list.types}
  ${board.types}
  ${user.types}

  type Query {
    ${card.queries}
    ${board.queries}
    ${user.queries}
  }

  type Mutation {
    ${card.mutations}
    ${list.mutations}
    ${board.mutations}
    ${user.mutations}
  }
`