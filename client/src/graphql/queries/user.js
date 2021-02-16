import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  query($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      _id
      first_name
      last_name
      email
      token
    }
  }
`

export const GET_USER = gql`
  query($token: String!) {
    getUser(token: $token) {
      _id
      first_name
      last_name
      email
      is_verified
    }
  }
`