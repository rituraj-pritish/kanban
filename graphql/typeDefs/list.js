module.exports = {
	types: `
    type List {
      _id: ID!,
      title: String!,
      board_id: ID!,
      cards: [Card]
    }
  `,

	mutations: `
    createList(
      title: String!,
      board_id: ID!
    ): Boolean,

    updateListIndex(
      new_index: Int!,
      old_index: Int!,
      list_id: ID!,
      board_id: ID!
    ): Boolean
  `
}