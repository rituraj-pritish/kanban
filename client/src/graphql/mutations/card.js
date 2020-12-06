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

// comments

export const ADD_COMMENT = gql`
  mutation(
    $card_id: ID!,
    $comment: String!
  ) {
    addComment(
      card_id: $card_id,
      comment: $comment
    )
  }
`

export const UPDATE_COMMENT = gql`
  mutation(
    $card_id: ID!,
    $comment_id: ID!,
    $comment: String!
  ) {
    updateComment(
      card_id: $card_id,
      comment_id: $comment_id,
      comment: $comment
    )
  }
`

export const DELETE_COMMENT = gql`
  mutation(
    $card_id: ID!,
    $comment_id: ID!
  ) {
    deleteComment(
      card_id: $card_id,
      comment_id: $comment_id
    )
  }
`

// labels

export const ADD_LABEL = gql`
  mutation(
    $card_id: ID!,
    $label_id: ID!
  ) {
    addLabel(
      card_id: $card_id,
      label_id: $label_id
    )
  }
`

export const REMOVE_LABEL = gql`
    mutation(
    $card_id: ID!,
    $label_id: ID!
  ) {
    removeLabel(
      card_id: $card_id,
      label_id: $label_id
    )
  }
`