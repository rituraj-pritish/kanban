import { gql } from '@apollo/client'

export const CREATE_CARD = gql`
  mutation(
    $title: String!,
    $list_id: ID!
  ) {
    createCard(
      title: $title,
      list_id: $list_id
    )
  }
`

export const DELETE_CARD = gql`
  mutation(
    $id: ID!,
    $list_id: ID!
  ) {
    deleteCard(
      id: $id,
      list_id: $list_id
    )
  }
`

export const UPDATE_CARD = gql`
  mutation(
    $id: ID!,
    $description: String,
    $title: String!
  ) {
    updateCard(
      id: $id,
      title: $title,
      description: $description
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