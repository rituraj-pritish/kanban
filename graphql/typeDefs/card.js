module.exports = {
	types: `
    type Comment {
      comment_by: ID,
      comment: String
    },

    type History {
      activity: String,
      type: String
    },

    type Card {
      _id: ID!,
      title: String!,
      description: String,
      created_at: String!,
      updated_at: String!,
      comments: [Comment],
      history: [History]
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