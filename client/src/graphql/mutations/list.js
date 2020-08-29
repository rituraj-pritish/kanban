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

export const UPDATE_CARD_INDEX = gql`
  mutation(
    $old_index: Int!,
    $new_index: Int!,
    $card_id: ID!,
    $old_list: ID!,
    $new_list: ID!
  ) {
    updateCardIndex(
      new_index: $new_index,
      old_index: $old_index,
      card_id: $card_id,
      old_list: $old_list,
      new_list: $new_list
    )
  }
`