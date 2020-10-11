import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation(
    $name: String!,
    $email: String!,
    $password: String!,
    $confirm_password: String!
  ) {
      signUp (
      name: $name,
      email: $email,
      password: $password,
      confirm_password: $confirm_password
  ) {
      _id
      name
      email
      token
  }}
`