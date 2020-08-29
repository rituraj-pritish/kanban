import { gql } from '@apollo/client'

export const GET_BOARDS = gql`
  query($user_id: ID!) {
    getBoards(user_id: $user_id) {
      _id
      name
    }
  }
`

export const GET_BOARD = gql`
  query($id: ID!) {
    getBoard(id: $id) {
      _id
      name
      lists {
        _id
        title
        cards {
          _id
          title
        }
      }
    }
  }
`