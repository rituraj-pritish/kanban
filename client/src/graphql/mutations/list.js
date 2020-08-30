import { gql } from '@apollo/client'

export const CREATE_LIST = gql`
  mutation(
    $title: String!,
    $board_id: ID!) {
      createList(
        title: $title,
        board_id: $board_id
      )
  }
`

export const UPDATE_LIST_INDEX = gql`
  mutation(
    $old_index: Int!,
    $new_index: Int!,
    $list_id: ID!,
    $board_id: ID!
  ) {
    updateListIndex(
      new_index: $new_index,
      old_index: $old_index,
      list_id: $list_id,
      board_id: $board_id
    )
  }
`