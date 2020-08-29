import { gql } from '@apollo/client'

export const GET_BOARDS = gql`
  query($user_id: ID!) {
    getBoards(user_id: $user_id) {
      _id
      name
    }
  }
`