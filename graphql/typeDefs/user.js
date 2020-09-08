module.exports = {
	types: `
    type User {
      name: String!,
      email: String!,
      password: String!
      token: String!
    }
  `,

	queries: `
    getUser(token: String!): User,
    signIn(email: String!, password: String!): User
  `,

	mutations: `
    signUp(email: String!, password: String!, name: String): User
  `
}