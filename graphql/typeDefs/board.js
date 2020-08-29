module.exports = {
	types: `
    type Board {
      _id: ID!,
      name: String!
    }
  `,

	queries: `
    getBoard(id: ID!): Board,
    getBoards(user_id: ID!): [Board]
  `,

	mutations: `
    createBoard(
      name: String!
    ): Boolean
  `
}