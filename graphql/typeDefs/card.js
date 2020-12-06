module.exports = {
	types: `
    type Label {
      _id: ID!,
      name: String!,
      bg_color: String!
    },
  
    type Comment {
      _id: ID!,
      comment_by: ID!,
      comment: String!,
      date: String
    },

    type History {
      _id: ID!,
      type: String!,
      done_by: ID!,
      done_on: String!,
      from: String,
      to: String,
      field: String
    },

    type Card {
      _id: ID!,
      title: String!,
      description: String,
      created_at: String!,
      updated_at: String!,
      comments: [Comment],
      history: [History],
      labels: [Label]
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
    ): Boolean,

    addComment(
      card_id: ID!,
      comment: String!
    ): Boolean,

    updateComment(
      comment_id: ID!,
      card_id: ID!,
      comment: String!
    ): Boolean,

    deleteComment(
      card_id: ID!,
      comment_id: ID!
    ): Boolean
  `
}