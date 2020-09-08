module.exports = {
	types: `
    type Card {
      _id: ID!,
      title: String!
    }
  `, 

	queries: `
    getCard(id: ID!): Card
  `,

	mutations: `
    createCard(
      title: String!,
      list_id: ID!
    ): Boolean,

    updateCardIndex(
      old_index: Int!,
      new_index: Int!,
      card_id: ID!,
      old_list: ID!,
      new_list: ID!
    ): Boolean
  `
}