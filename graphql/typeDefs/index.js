const { gql } = require('apollo-server-express')
const card = require('./card')

module.exports = gql`
  ${card.types}

  type Query {
    ${card.queries}
  }

  type Mutation {
    ${card.mutations}
  }
`