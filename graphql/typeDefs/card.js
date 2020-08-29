module.exports = {
  types: `
    type Card {
      title: String!
    }
  `, 

  queries: `
    getCard(id: ID): Card
  `,

  mutations: `
    createCard(
      title: String!
    ): Boolean
  `
}