import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  query($email: string!, $password: string!) {
    signIn(email: $email, password: $password) {
      name
      email
    }
  }
`