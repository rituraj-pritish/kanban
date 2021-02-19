import { gql } from '@apollo/client'

export const SIGN_UP = gql`
  mutation(
    $first_name: String!,
    $last_name: String!,
    $email: String!,
    $password: String!,
    $confirm_password: String!
  ) {
      signUp (
      first_name: $first_name,
      last_name: $last_name,
      email: $email,
      password: $password,
      confirm_password: $confirm_password
  ) {
      _id
      first_name
      last_name
      email
      token
  }}
`

export const SEND_VERIFICATION_EMAIL = gql`
  mutation {
    sendVerificationEmail
  }
`