module.exports = {
	types: `
    type User {
      first_name: String!,
      last_name: String!,
      is_verified: Boolean!,
      email: String!,
      token: String!,
      _id: ID!
    }
  `,

	queries: `
    getUser(token: String!): User,
    signIn(email: String!, password: String!): User
  `,

	mutations: `
    signUp(
      email: String!, 
      password: String!, 
      first_name: String!, 
      last_name: String!, 
      confirm_password: String!
    ): User
  `
}