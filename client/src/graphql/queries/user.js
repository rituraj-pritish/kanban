import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  query($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      _id
      name
      email
      token
    }
  }
`

export const GET_USER = gql`
  query($token: String!) {
    getUser(token: $token) {
      _id
      name
      email
    }
  }
`