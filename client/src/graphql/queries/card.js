import { gql } from '@apollo/client'

export const GET_CARD = gql`
  query($id: ID!) {
    getCard(id: $id) {
      _id
      title
      description
      comments {
        _id
        comment
        comment_by
      }
      history {
        activity
        done_by
      }
      created_at
      updated_at
    }
  }
`