import { gql } from '@apollo/client'

export const GET_CARD = gql`
  query($id: ID!) {
    getCard(id: $id) {
      _id
      title
    }
  }
`