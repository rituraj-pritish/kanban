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

export const CREATE_LABEL = gql`
  mutation(
    $board_id: ID!,
    $name: String!,
    $bg_color: String!
  ) {
    createLabel(
      board_id: $board_id,
      name: $name,
      bg_color: $bg_color
    )
  }
`

export const UPDATE_LABEL = gql`
  mutation(
    $board_id: ID!,
    $label_id: ID!,
    $name: String!,
    $bg_color: String!
  ) {
    updateLabel(
      board_id: $board_id,
      label_id: $label_id,
      name: $name,
      bg_color: $bg_color
    )
  }
`

export const DELETE_LABEL = gql`
  mutation(
    $board_id: ID!,
    $label_id: ID!
  ) {
    deleteLabel(
      board_id: $board_id,
      label_id: $label_id
    )
  }
`