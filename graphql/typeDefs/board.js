module.exports = {
	types: `
    type Board {
      _id: ID!,
      name: String!,
      user_id: ID!,
      lists: [List],
      labels: [Label]
    }
  `,

	queries: `
    getBoard(id: ID!): Board,
    getBoards(user_id: ID!): [Board]
  `,

	mutations: `
    createBoard(
      name: String!,
      user_id: ID!
    ): Board,

    updateBoard(
      id: ID!,
      name: String!
    ): Boolean,

    deleteBoard(
      id: ID!
    ): Boolean,

    createLabel(
      board_id: ID!,
      name: String!,
      bg_color: String!
    ): Boolean,

    deleteLabel(
      board_id: ID!,
      label_id: ID!
    ): Boolean,

    updateLabel(
      board_id: ID!,
      label_id: ID!,
      name: String!,
      bg_color: String!
    ): Boolean,
  `
}