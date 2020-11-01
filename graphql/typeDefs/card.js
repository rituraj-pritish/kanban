module.exports = {
	types: `
    type Card {
      _id: ID!,
      title: String!,
      description: String
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

    deleteCard(
      list_id: ID!,
      id: ID!
    ): Boolean,

    updateCard(
      id: ID!,
      title: String,
      description: String
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