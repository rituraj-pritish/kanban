module.exports = {
	types: `
    type List {
      _id: ID!,
      title: String!,
      board_id: ID!
    }
  `,

	mutations: `
    createList(
      title: String!,
      board_id: ID!
    ): Boolean
  `
}