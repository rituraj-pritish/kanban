import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation(
    $name: String!,
    $user_id: ID!) {
      createBoard(
        name: $name,
        user_id: $user_id
      )
  }
`

export const DELETE_BOARD = gql`
  mutation(
    $id: ID!
  ) {
      deleteBoard(id: $id)
  }
`