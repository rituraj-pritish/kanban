import { gql } from '@apollo/client'

export const CREATE_LIST = gql`
  mutation(
    $title: String!,
    $board_id: ID!) {
      createBoard(
        title: $title,
        board_id: $board_id
      )
  }
`